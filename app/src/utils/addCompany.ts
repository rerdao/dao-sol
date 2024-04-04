import { web3 } from "@project-serum/anchor";

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
