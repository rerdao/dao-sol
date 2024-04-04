use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct UserProfile {
    pub authority: Pubkey,
    //pub user_type: u8,
    //pub last_feat: u8,
    //pub feat_count: u8,
}

#[account]
#[derive(Default)]
pub struct CompanyList {
    pub authority: Pubkey,
    pub company_name: String,
    pub company_image_url: String,
    pub about: String,
    //pub idx: u8,
    pub contract_address: String,
    pub category: CompanyCategory,
    pub websites: String,
    pub terms: String,
    //pub social: SocialType,
    pub network: String,
    pub symbol: String,
    pub decimal: u8,
    pub quorum: u32,
    pub last_feat: u32,
    pub feat_count: u32,
    pub member_count: u32,
}

#[account]
#[derive(Default)]
pub struct CompanyInfo {    
    pub company_name: String,
    pub company_image_url: String,
    pub about: String,
    pub contract_address: String,
    pub category: CompanyCategory,
    pub websites: String,
    pub terms: String,
    //pub social: SocialType,
    pub network: String,
    pub symbol: String,
    pub decimal: u8,
    pub quorum: u32,
}


#[account]
#[derive(Default)]
pub struct SocialType {    
    pub github: String,
    pub twitter: String,   
    pub coin_gecko: String  
}



#[account]
#[derive(Default)]
pub struct FeatureList {
    pub authority: Pubkey,
    pub company_pubkey: Pubkey,
    pub title: String,
    pub content: String,
    pub idx: u32,
    pub company_idx: u32,
    pub vote_complete: bool,
    pub vote_period: i64,
    pub vote_count: u32,
}

#[account]
#[derive(Default)]
pub struct VoteList {
    pub authority: Pubkey,
    pub company_pubkey: Pubkey,
    pub vote_count: u32,
    pub idx: u32,
    pub vote_check: bool,
    pub feature_idx: u32,
    //pub company_idx: u8,
    pub vote: VoteType,
}


#[account]
#[derive(Default)]
pub struct MemberList {
    pub authority: Pubkey,
    pub company_pubkey: Pubkey,
    //pub company_idx: u8,
    pub member_count: u32,
    pub bio: String,
    pub idx: u32,
    pub joined: bool,
    pub admin: bool,
}

#[derive(Debug, AnchorSerialize, AnchorDeserialize, Clone, Copy, PartialEq, Eq)]
pub enum VoteType {
    For,
    Against,
    Abstain,
}

#[derive(Debug, AnchorSerialize, AnchorDeserialize, Clone, Copy, PartialEq, Eq)]
pub enum CompanyCategory {
    Protocol,
    Social,
    Investment,
    Grant,
    Service,
    Media,
    Creator,
    Collector,
}




