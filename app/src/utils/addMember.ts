import { web3 } from "@project-serum/anchor";

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
