use anchor_lang::prelude::*;

#[error_code]
pub enum AppError {
    #[msg("Not a voting option")]
    NotVotingOption,
    #[msg("Not a company category")]
    NotCompanyCategory
}