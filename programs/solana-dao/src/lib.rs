use anchor_lang::prelude::*;
use std::mem::size_of;

pub mod errors;
pub mod states;
pub mod constants;
use crate::{states::*, constants::*, errors::*};

declare_id!("3aiTCgm7zJMUZ8uXj3MHYRyj3MDJLJaDKutjj4H9fepR");

#[program]
pub mod solana_dao {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let user_profile = &mut ctx.accounts.user_profile;
        user_profile.authority = ctx.accounts.authority.key();
        //user_profile.last_feat = 0;
        //user_profile.feat_count = 0;
        //user_profile.user_type = _user_type;
        Ok(())
    }

    pub fn add_features(ctx: Context<AddFeatures>, _title: String, _company_pubkey: Pubkey, _vote_period: i64, _content: String) -> Result<()> {
        // get the current date in solana
        //let clock = Clock::get()?;
        //let current_timestamp = clock.unix_timestamp;
        let company_list = &mut ctx.accounts.company_list;
        let feature_list = &mut ctx.accounts.feature_list;

        feature_list.authority = ctx.accounts.authority.key();
        feature_list.title = _title;
        feature_list.content = _content;
        feature_list.idx = company_list.last_feat;
        feature_list.company_pubkey = _company_pubkey;
        feature_list.vote_count = 0;
        // add the current date to the duration selected by the company to vote for 
        //_vote period will be type Date::now in javascript and will be convert to seconds 
        //seconds can easily work with type i64 in rust
        feature_list.vote_period = _vote_period;
        feature_list.vote_complete = false;

        company_list.last_feat = company_list.last_feat.checked_add(1).unwrap();

        company_list.feat_count = company_list.feat_count.checked_add(1).unwrap();

        Ok(())
    }

    pub fn add_voting(ctx: Context<AddVoting>, _feature_idx: u32, _company_pubkey: Pubkey, _vote: u8) -> Result<()> {
        let voting_list = &mut ctx.accounts.voting_list;
        let feature_list = &mut ctx.accounts.feature_list;
        let vote: VoteType = VoteType::new(_vote).unwrap();

        //check if voting period is still valid else update feature pda that the vote has ended/closed

        voting_list.authority = ctx.accounts.authority.key();
        voting_list.feature_idx = _feature_idx;
        voting_list.company_pubkey = _company_pubkey;
        voting_list.vote_check = true;
        voting_list.idx = voting_list.idx.checked_add(1).unwrap();
        voting_list.vote_count = voting_list.vote_count.checked_add(1).unwrap();
        voting_list.vote = vote;

        feature_list.vote_count = feature_list.vote_count.checked_add(1).unwrap();

        Ok(())
    }

    pub fn add_company(ctx: Context<AddCompany>, _company_name: String, _company_image_url: String, _about: String, _contract_address: String, _websites: String, _terms: String, _network: String, _symbol: String, _decimal: u8, _quorum: u32, _category: u8) -> Result<()> {
        let company_list = &mut ctx.accounts.company_list;

        let category: CompanyCategory = CompanyCategory::new(_category).unwrap();
        company_list.authority = ctx.accounts.authority.key();
        company_list.company_name = _company_name;
        company_list.company_image_url = _company_image_url;
        company_list.about = _about;
        company_list.contract_address = _contract_address;
        company_list.category = category;
        company_list.websites = _websites;
        company_list.terms = _terms;
        //company_list.social = _company_info.social;
        company_list.network = _network;
        company_list.symbol = _symbol;
        company_list.decimal = _decimal;
        company_list.quorum = _quorum;
        //company_list.idx = company_list.idx.checked_add(1).unwrap();
        company_list.feat_count = 0;
        company_list.last_feat = 0;
        company_list.member_count = 0;
        Ok(())
    }

    pub fn add_member(ctx: Context<AddMember>, _company_pubkey: Pubkey) -> Result<()> {
        let member_list = &mut ctx.accounts.member_list;
        let company_list = &mut ctx.accounts.company_list;

        member_list.authority = ctx.accounts.authority.key();
        member_list.company_pubkey = _company_pubkey;
        member_list.idx = member_list.idx.checked_add(1).unwrap();
        member_list.member_count = member_list.member_count.checked_add(1).unwrap();
        member_list.joined = true;

        company_list.member_count = company_list.member_count.checked_add(1).unwrap();

        Ok(())
    }

    pub fn make_member_admin(ctx: Context<AddMember>) -> Result<()> {
        let _member_list = &mut ctx.accounts.member_list;

        Ok(())
    }
}

#[derive(Accounts)]
#[instruction()]
pub struct Initialize<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(
        init,
        //seeds = [USER_TAG, authority.key().as_ref()],
        //bump,
        payer = authority,
        space = 8 + size_of::<UserProfile>(),
    )]
    pub user_profile: Account<'info, UserProfile>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct AddFeatures<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    //#[account( mut, seeds = [USER_TAG, authority.key().as_ref()], bump, has_one = authority)]
    //pub user_profile: Box<Account<'info, UserProfile>>,

    #[account(mut)]
    pub company_list: Account<'info, CompanyList>,

    #[account(
        init,
        //seeds = [FEATURE_TAG, authority.key().as_ref(), &company_list.last_feat.to_be_bytes()],
        seeds = [FEATURE_TAG, authority.key().as_ref()],
        bump,
        payer = authority,
        //space = 8 + 100 + size_of::<FeatureList>(),
        space = 8 + 100 + size_of::<FeatureList>()
    )]
    pub feature_list: Account<'info, FeatureList>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(_company_pubkey: Pubkey, _vote: u8)]
pub struct AddVoting<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    //add feature account in the pda, for easy access of features account
    //#[account()]

    #[account(
        init,
        constraint = feature_list.vote_period > Clock::get().unwrap().unix_timestamp && 
        member_list.authority == *authority.key,                                                

        seeds = [
            VOTE_TAG, 
            authority.key().as_ref(), 
            //&feature_list.vote_count.to_be_bytes(), 
            //&member_list.member_count.to_be_bytes(),
        ],
        bump,
        payer = authority,
        space = 8 + size_of::<VoteList>()
    )]

    pub voting_list: Account<'info, VoteList>,

    pub feature_list: Account<'info, FeatureList>,

    pub member_list: Account<'info, MemberList>,

    pub company_list: Account<'info, CompanyList>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct AddCompany<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        init,
        seeds = [COMPANY_TAG, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 8 + 330 + size_of::<CompanyList>()
        //space = 8 + 330 + 100
    )]
    pub company_list: Account<'info, CompanyList>,

    pub system_program: Program<'info, System>,

}

#[derive(Accounts)]
#[instruction()]
pub struct AddMember<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        init,
        seeds = [MEMBER_TAG, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 8 + size_of::<MemberList>()

    )]
    pub member_list: Account<'info, MemberList>,

    pub company_list: Account<'info, CompanyList>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct MakeMemberAdmin<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        mut,
        constraint = *authority.key == company_list.authority
    )]
    pub company_list: Account<'info, CompanyList>,

    pub member_list: Account<'info, MemberList>,

    pub system_program: Program<'info, System>,

}


pub fn bump(seeds: &[&[u8]], program_id: &Pubkey) -> u8 {
    let (_found_key, bump) = Pubkey::find_program_address(seeds, program_id);
    bump
}

//Voting value types
impl VoteType {
    pub fn new(vote_value: u8) -> Result<Self> {
        match vote_value {
            0 => Ok(VoteType::For),
            1 => Ok(VoteType::Against),
            2 => Ok(VoteType::Abstain),
            _ => Err(AppError::NotVotingOption.into()),
        }
    }
}

impl Default for VoteType {
    fn default() -> Self {
        VoteType::Abstain
    }
}

// Company category types

impl CompanyCategory {
    pub fn new(category_value: u8) -> Result<Self> {
        match category_value {
            0 => Ok(CompanyCategory::Protocol),
            1 => Ok(CompanyCategory::Social),
            2 => Ok(CompanyCategory::Investment),
            3 => Ok(CompanyCategory::Grant),
            4 => Ok(CompanyCategory::Service),
            5 => Ok(CompanyCategory::Media),
            6 => Ok(CompanyCategory::Creator),
            7 => Ok(CompanyCategory::Collector),
            _ => Err(AppError::NotCompanyCategory.into()),
        }
    }
}

impl Default for CompanyCategory {
    fn default() -> Self {
        CompanyCategory::Social
    }
}

// Todo
// check the voting period and notify the system that the voting is closed
// Add more feature to the company, E.g 
// 1. who can vote
// 2. requirements for voting 