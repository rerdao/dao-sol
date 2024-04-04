import { web3 } from "@project-serum/anchor";

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
