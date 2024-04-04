import { web3 } from "@project-serum/anchor";

export const initialize = (program, authority, userProfile, systemProgram,) => {
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
