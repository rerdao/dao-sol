import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SolanaDao } from "../target/types/solana_dao";
import { assert, expect } from "chai";
const { SystemProgram } = anchor.web3;


describe("solana-dao", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.local();
  anchor.setProvider(anchor.AnchorProvider.local());

  const LAMPORTS_PER_SOL = 1000000000;

  let companyPda;
  let companyPda2;
  let bump;
  let bump2;
  let featurePDA;
  let featurePDA2;
  let memberPDA;
  let memberPDA2;
  let votePDA;

  // Account addresses 
  const doaAdmin = anchor.web3.Keypair.generate();
  // member account
  const memberAddress = anchor.web3.Keypair.generate();
  const memberAddress2 = anchor.web3.Keypair.generate();

  //company account
  const companyAddress = anchor.web3.Keypair.generate();
  const companyAddress2 = anchor.web3.Keypair.generate();


  // company/user acccount
  const userAccount = anchor.web3.Keypair.generate();

  const program = anchor.workspace.SolanaDao as Program<SolanaDao>;


  // Token data

      // Metaplex Constants
      // Configure the client to use the local cluster.
  

    const METADATA_SEED = "metadata";
    const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

    // Constants from our program
    const MINT_SEED = "mint";
  
    // Data for our tests
    const payer = anchor.web3.Keypair.generate();
    const metadata = {
      name: "RER Token",
      symbol: "RER",
      uri: "https://5vfxc4tr6xoy23qefqbj4qx2adzkzapneebanhcalf7myvn5gzja.arweave.net/7UtxcnH13Y1uBCwCnkL6APKsge0hAgacQFl-zFW9NlI",
      decimals: 9,
    };
    const mintAmount = 10;
    const [mint] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from(MINT_SEED)],
      program.programId
    );

    const [metadataAddress] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from(METADATA_SEED),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID
    );



  //Token data end

  //Top up all accounts that will need lamports
  before(async () => {
    await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(
        doaAdmin.publicKey,
        2 * LAMPORTS_PER_SOL
      )
    );

    await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(
        memberAddress.publicKey,
        2 * LAMPORTS_PER_SOL
      )
    );

        await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(
        companyAddress.publicKey,
        2 * LAMPORTS_PER_SOL
      )
        );
    
    await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(
        memberAddress2.publicKey,
        2 * LAMPORTS_PER_SOL
      )
    );

    await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(
        companyAddress2.publicKey,
        2 * LAMPORTS_PER_SOL
      )
    );



    await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(
        userAccount.publicKey,
        2 * LAMPORTS_PER_SOL
      )
    );

  });

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods
      .initialize()
      .accounts({
        authority: doaAdmin.publicKey,
        userProfile: userAccount.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([doaAdmin, userAccount])
      .rpc();
    console.log("Your transaction signature", tx);
  });

  it("Test Add company 1 function", async () => {
    const seedString: string = "COMPANY_STATE";
    const seed: Buffer = Buffer.from(seedString);


    [companyPda, bump] = await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(seed),
        Buffer.from(companyAddress.publicKey.toBytes()),
      ],
      program.programId
    );

    // Attempt to add member3 as member (a member)
    //const companyInfo = {
    const companyName = "ICP";
    const companyImageUrl = "https://5vfxc4tr6xoy.com";
    const about = "A platform that provides services";
    const contractAddress = "7UtxcnH13Y1uBCwCnkL6APKsge0hAgacQFl";
    const symbol = "ICP";
    const websites = "https://www.icp.com";
    const terms = 'our terms';
    const network = "EVM Network";
    const decimals = 9;
    const quorum = 10000;
    //};

    const cat = 3;

    //console.info(new Blob([JSON.stringify(companyInfo)]).size); // 330


    try {
      await program.methods
        .addCompany(
          companyName,
          companyImageUrl,
          about,
          contractAddress,
          symbol,
          websites,
          terms,
          network,
          decimals,
          quorum,
          cat
        )
        .accounts({
          authority: companyAddress.publicKey,
          companyList: companyPda,
          systemProgram: SystemProgram.programId,
        })
        .signers([companyAddress])
        .rpc();
      let companyState = await program.account.companyList.fetch(companyPda);
      expect(companyState.companyName).to.equal("ICP");
      //expect(companyState.idx).to.equal(1);
      expect(companyState.lastFeat).to.equal(0);
      expect(companyState.featCount).to.equal(0);
    } catch (err) {
      console.log(err);
    }
  });

  //Company 2
  it("Test Add company 2 function", async () => {

  const seedString: string = "COMPANY_STATE";
    const seed: Buffer = Buffer.from(seedString);


    [companyPda2, bump] = await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(seed),
        Buffer.from(companyAddress2.publicKey.toBytes()),
      ],
      program.programId
    );

    // Attempt to add member3 as member (a member)
    //const companyInfo = {
    const companyName = "RERDao";
    const companyImageUrl = "https://5vfxc4tr6xoy23qefqbj4qx2adzkzapneebanhcalf7myvn5gzja.arweave.net";
    const about = "An online streaming platform";
    const contractAddress = "7UtxcnH13Y1uBCwCnkL6APKsge0hAgacQFl";
    const symbol = "Youtube";
    const websites = "https://www.youtube.com";
    const terms = 'our terms';
    const network = "EVM Network";
    const decimals = 9;
    const quorum = 10000;
    //};

    const cat = 3;

    //console.info(new Blob([JSON.stringify(companyInfo)]).size); // 330


    try {
      await program.methods
        .addCompany(
          companyName,
          companyImageUrl,
          about,
          contractAddress,
          symbol,
          websites,
          terms,
          network,
          decimals,
          quorum,
          cat
        )
        .accounts({
          authority: companyAddress2.publicKey,
          companyList: companyPda2,
          systemProgram: SystemProgram.programId,
        })
        .signers([companyAddress2])
        .rpc();
      const companyState = await program.account.companyList.fetch(companyPda2);
      expect(companyState.companyName).to.equal("Youtube");
      //expect(companyState.idx).to.equal(1);
      expect(companyState.lastFeat).to.equal(0);
      expect(companyState.featCount).to.equal(0);
    } catch (err) {
      console.log(err);
    }
  });




  // Add new proposal/feature to company 1
  it("Test add feature function to company 1", async () => {
    const seedString: string = "FEATURE_STATE";
    const seed: Buffer = Buffer.from(seedString);
    [featurePDA, bump] = await anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from(seed),
        Buffer.from(companyAddress.publicKey.toBytes()),
      ],
      program.programId
    )

    const content = "Add easy docummentation features to the ICP website";
    const title = "ICP Easy Documentation"
    //const companyIdx = 1;
    const currentTimeInMs = Date.now();
    const votePeriod: number = currentTimeInMs + (1000 * 60 * 60 * 24 * 30); // plus 30 days, 1 months
    //const adjustedDateObj = new Date(adjustedTimeAsMs);
    try {
      await program.methods
        .addFeatures(
          title,
          companyPda,
          new anchor.BN(votePeriod),
          content
        )
        .accounts({
          authority: companyAddress.publicKey,
          companyList: companyPda,
          featureList: featurePDA,
          systemProgram: SystemProgram.programId,
        })
        .signers([companyAddress])
        .rpc();
      let companyState = await program.account.companyList.fetch(companyPda);
      let featureListState = await program.account.featureList.fetch(featurePDA);
      expect(featureListState.content).to.equal(content);
      //expect(featureListState.companyIdx).to.equal(companyState.idx);
      expect(featureListState.idx).to.equal(companyState.lastFeat - 1);
        
    } catch (error) {
      console.log(error);
    }
  });

    // Add new proposal/feature to company 2
  it("Test add feature function to company 2", async () => {
    let seedString: string = "FEATURE_STATE";
    let seed: Buffer = Buffer.from(seedString);
    [featurePDA2, bump] = await anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from(seed),
        Buffer.from(companyAddress2.publicKey.toBytes()),
      ],
      program.programId
    )

    const content = "Add easy docummentation features to the YouTube website";
    const title = "YouTube Easy Documentation"
    //const companyIdx = 1;
    const currentTimeInMs = Date.now();
    const votePeriod: number = currentTimeInMs + (1000 * 60 * 60 * 24 * 30); // plus 30 days, 1 months
    //const adjustedDateObj = new Date(adjustedTimeAsMs);
    try {
      await program.methods
        .addFeatures(
          title,
          companyPda2,
          new anchor.BN(votePeriod),
          content
        )
        .accounts({
          authority: companyAddress2.publicKey,
          companyList: companyPda2,
          featureList: featurePDA2,
          systemProgram: SystemProgram.programId,
        })
        .signers([companyAddress2])
        .rpc();
      let companyState = await program.account.companyList.fetch(companyPda2);
      let featureListState = await program.account.featureList.fetch(featurePDA2);
      expect(featureListState.content).to.equal(content);
      //expect(featureListState.companyIdx).to.equal(companyState.idx);
      expect(featureListState.idx).to.equal(companyState.lastFeat - 1);
        
    } catch (error) {
      console.log(error);
    }
  });


  it("Test Add new member function", async () => {
    let seedString: string = "MEMBER_STATE";
    let seed: Buffer = Buffer.from(seedString);

    [memberPDA, bump] = await anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from(seed),
        Buffer.from(memberAddress.publicKey.toBytes()),
      ],
      program.programId
    )
    let companyState = await program.account.companyList.fetch(companyPda);

    try {
      await program.methods
        .addMember(
          companyPda
        )
        .accounts({
          authority: memberAddress.publicKey,
          memberList: memberPDA,
          companyList: companyPda,
          systemProgram: SystemProgram.programId
        })
        .signers([memberAddress])
        .rpc()
    } catch (error) {
      console.log(error)
    }

    let memberListState = await program.account.memberList.fetch(memberPDA);
    //expect(memberListState.companyIdx).to.equal(companyState.idx);
    //expect(memberListState.joined).to.equal(true);
  });

  it("Add another new member 2 function", async () => {
    let seedString: string = "MEMBER_STATE";
    let seed: Buffer = Buffer.from(seedString);

    [memberPDA2, bump] = await anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from(seed),
        Buffer.from(memberAddress2.publicKey.toBytes()),
      ],
      program.programId
    )
    //let companyState = await program.account.companyList.fetch(companyPda2);

    try {
      await program.methods
        .addMember(
          companyPda2
        )
        .accounts({
          authority: memberAddress2.publicKey,
          memberList: memberPDA2,
          companyList: companyPda2,
          systemProgram: SystemProgram.programId
        })
        .signers([memberAddress2])
        .rpc()
    } catch (error) {
      console.log(error)
    }

    let memberListState = await program.account.memberList.fetch(memberPDA2);
    //expect(memberListState.companyIdx).to.equal(companyState.idx);
    //expect(memberListState.joined).to.equal(true);
  });


  it("Cast a vote as a member of a company 1", async () => {
        const seedString: string = "VOTE_STATE";
    const seed: Buffer = Buffer.from(seedString);

        const featureCounterBuffer = Buffer.alloc(1);
    featureCounterBuffer.writeUIntBE(
      (await program.account.featureList.fetch(featurePDA)).voteCount,
      0,
      1
    );

            const memberCounterBuffer = Buffer.alloc(1);
    memberCounterBuffer.writeUIntBE(
      (await program.account.memberList.fetch(memberPDA)).memberCount,
      0,
      1
    );



    [votePDA, bump] = await anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from(seed),
        Buffer.from(memberAddress.publicKey.toBytes()),
        //featureCounterBuffer,
        //memberCounterBuffer

      ],
      program.programId
    );

    //let companyState = await program.account.companyList.fetch(companyPda);
    //let featureListState = await program.account.featureList.fetch(featurePDA);

      try {
        await program.methods
          .addVoting(
            1,
            companyPda,
            1
          )
          .accounts({
            authority: memberAddress.publicKey,
            votingList: votePDA,
            companyList: companyPda,
            featureList: featurePDA,
            memberList: memberPDA,
            systemProgram: SystemProgram.programId
          })
          .signers([memberAddress])
          .rpc();
        let votingListState = await program.account.voteList.fetch(votePDA);
        expect(votingListState.voteCheck).to.equal(true);

      } catch (error) {
        console.log(error)
      }
  });

  it("Get all company lists", async () => {
    let companyState = await program.account.companyList.all();
    //console.log(companyState);
  });

  it("Get all member lists", async () => {
    let memberState = await program.account.memberList.all();
    //console.log(memberState);
  });

  /**    // Test init token
    it("initialize the token", async () => {

      const info = await provider.connection.getAccountInfo(mint);
      if (info) {
        return; // Do not attempt to initialize if already initialized
      }
      console.log("  Mint not found. Attempting to initialize.");
   
      const context = {
        metadata: metadataAddress,
        mint,
        payer: payer.publicKey,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
      };
  
      const txHash = await program.methods
        .initToken(metadata)
        .accounts(context)
        .rpc();
  
      await provider.connection.confirmTransaction(txHash, 'finalized');
      console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
      const newInfo = await provider.connection.getAccountInfo(mint);
      assert(newInfo, "  Mint should be initialized.");
    });  

    // Test mint tokens
    it("mint tokens", async () => {

        const destination = await anchor.utils.token.associatedAddress({
        mint: mint,
        owner: payer.publicKey,
        });

        let initialBalance: number;
        try {
        const balance = (await provider.connection.getTokenAccountBalance(destination))
        initialBalance = balance.value.uiAmount;
        } catch {
        // Token account not yet initiated has 0 balance
        initialBalance = 0;
        } 
        
        const context = {
        mint,
        destination,
        payer: payer.publicKey,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
        };

        const txHash = await program.methods
        .mintTokens(new anchor.BN(mintAmount * 10 ** metadata.decimals))
        .accounts(context)
        .rpc();
        await provider.connection.confirmTransaction(txHash);
        console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);

        const postBalance = (
        await provider.connection.getTokenAccountBalance(destination)
        ).value.uiAmount;
        assert.equal(
        initialBalance + mintAmount,
        postBalance,
        "Post balance should equal initial plus mint amount"
        );
    });
    **/

});
