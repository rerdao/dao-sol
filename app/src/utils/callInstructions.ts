import { web3 } from "@project-serum/anchor";

export const initialize = (program, authority, userProfile, systemProgram) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .initialize()
          .accounts({
            authority,
            userProfile,
            systemProgram,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};

export const addFeatures = (program, content, companyIdx, votePeriod, authority, userProfile, featureList, systemProgram,) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .addFeatures( content, companyIdx, votePeriod,)
          .accounts({
            authority,
            userProfile,
            featureList,
            systemProgram,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};

export const addVoting = (program, featureIdx, companyIdx, vote, authority, votingList, systemProgram,) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .addVoting( featureIdx, companyIdx, vote,)
          .accounts({
            authority,
            votingList,
            systemProgram,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};

export const addCompany = (program, companyName, about, authority, companyList, systemProgram,) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .addCompany( companyName, about,)
          .accounts({
            authority,
            companyList,
            systemProgram,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};

export const addMember = (program, companyIdx, authority, memberList, systemProgram,) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .addMember( companyIdx,)
          .accounts({
            authority,
            memberList,
            systemProgram,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};

