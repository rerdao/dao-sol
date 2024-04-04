import { web3 } from "@project-serum/anchor";

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
