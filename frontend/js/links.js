// links.js
const linksData = {
     "1": '<li id="file-list" class="file-list" ><a href="https://drive.google.com/drive/folders/1tJsllN0YRHNyJsBK4xsg3TKCIzgjIKCA?usp=drive_link" target="_blank">Liverpool</a></li>',
     "2": '<li class="file-list" ><a href="https://drive.google.com/drive/folders/1oPbZvEC1ve-L7lql-5SyUdzL3788xaFM?usp=drive_link" target="_blank">Brenda trindade</a></li>',
     "3": '<li><a href="https://drive.google.com/drive/folders/1WadZ6vaOZ6mf5PsvHSfgmsV2jiKmwFqm?usp=drive_link" target="_blank">Amiichan</a></li>',
     "4": '<li><a href="https://drive.google.com/drive/folders/1iVOImCtuNz-eta1z8rDyzJPXb1uCLwnu?usp=drive_link" target="_blank">Ananda</a></li>',
     "5": '<li><a href="https://drive.google.com/drive/folders/12iIjevOOESVHaJvSckeD3I2XuuWCz4XC?usp=drive_link" target="_blank">Brenda e mari</a></li>',
     "6": '<li><a href="https://drive.google.com/drive/folders/1svG0_Xqgq5f35mh2gEk69g_mm_nPN5fw?usp=drive_link" target="_blank">Hanna owo</a></li>',
     "7": '<li><a href="https://drive.google.com/drive/folders/1XpqMN1ZjLz_6ycmJyz9iWEIgp3DOgMKr?usp=drive_link" target="_blank">Isah pack</a></li>',
     "8": '<li><a href="https://drive.google.com/drive/folders/1zTPcDZm45w_j6iA8cPc--9Zqv_ln3T-w?usp=drive_link" target="_blank">Jameliz</a></li>',
     "9": '<li><a href="https://drive.google.com/drive/folders/1FaZ0p_GSM-aHFfFXgVA0SEU-ri2TvHIm?usp=drive_link" target="_blank">Kawaii sofey</a></li>',
    "10": '<li><a href="https://drive.google.com/drive/folders/1i3X_RX-gKDOOcJzZTu8M__4dMsXU0wzC?usp=drive_link" target="_blank">Lana rhoates</a></li>',
    "11": '<li><a href="https://drive.google.com/drive/folders/18dfgzjoRfVvEJgSZTXNYLkEwwIX5hiEg?usp=drive_link" target="_blank">Liliana</a></li>',
    "12": '<li><a href="https://drive.google.com/drive/folders/15HKeCzOx1PEx-ewXVguJMP86lnfglrua?usp=drive_link" target="_blank">Little waren</a></li>',
    "13": '<li><a href="https://drive.google.com/drive/folders/1VtVN3-fcrMqrxbicIQHrneFzaRS4ExmC?usp=drive_link" target="_blank">Moninseua</a></li>',
    "14": '<li><a href="https://drive.google.com/drive/folders/12iLHp0e1gfBqRcKVzKBhR90I5PlfFL2X?usp=drive_link" target="_blank">Nathalia valente</a></li>',
    "15": '<li><a href="https://drive.google.com/drive/folders/113JrL_CQVspY4cCRfbBA2NJQkDuiJPf7?usp=drive_link" target="_blank">Popi</a></li>',
    "16": '<li><a href="https://drive.google.com/drive/folders/1oGwNiaX2F8fMCjXeeQW85Rkq93DDnu3F?usp=drive_link" target="_blank">Samara costa</a></li>',
    "17": '<li><a href="https://drive.google.com/drive/folders/1co0fdaHmW5uthnnKQ2sgy5uIaZkz0vZF?usp=drive_link" target="_blank">Sava</a></li>',
    "18": '<li><a href="https://drive.google.com/drive/folders/1WJr2iphSVht0EU2eI-BmMiPcHMSd7aBl?usp=drive_link" target="_blank">Soogsx</a></li>',
    "19": '<li><a href="https://drive.google.com/drive/folders/11O_mG0EmNutghG7LtsNZdnMmyeUk5OxD?usp=drive_link" target="_blank">Sunaika</a></li>',
    "20": '<li><a href="https://drive.google.com/drive/folders/12gVcGI9d7k5_jPq57YKs9p1mpXxY0aH5?usp=drive_link" target="_blank">Tamiria</a></li>',
    "21": '<li><a href="https://drive.google.com/drive/folders/1qI0QH-nkQ_zEl-TiC86VSrnHIYqAZxqB?usp=drive_link" target="_blank">Vera dijkmans</a></li>',
    "22": '<li><a href="https://drive.google.com/drive/folders/12KpO5qScYoQFYJ8NLUurRoNYsotpdsc3?usp=drive_link" target="_blank">Fun time e mia Malkova</a></li>',
    "23": '<li><a href="https://drive.google.com/drive/folders/11D1G_BTs-NF9xQ1hTwCF9k5lfoQHttc_?usp=drive_link" target="_blank">Ella faria</a></li>',
    "24": '<li><a href="https://drive.google.com/drive/folders/1lKtSVrQ74pNyLs6KPmgbKAVxKwgdPGtC?usp=drive_link" target="_blank">Bellabumzy</a></li>',
    "25": '<li><a href="https://drive.google.com/drive/folders/1DebQhvnIR7dx1k8ulHgWJ_52Eo4XS5pM?usp=drive_link" target="_blank">Sasha uwu</a></li>',
    "26": '<li><a href="https://drive.google.com/drive/folders/1KZhuM82KDZiOBXzhHv7X-fEyYP4f5K-7" target="_blank">Cloe ranncok</a></li>',
    "27": '<li><a href="https://drive.google.com/drive/folders/1ogCyTF8_QbhByIUQFiXpPFqeMUIQKLEd" target="_blank">Nick xoxo</a></li>',
    "28": '<li><a href="https://drive.google.com/drive/folders/1pip6uadnst63hvBPnGA5jC87QpbTJuQ2?usp=sharing" target="_blank">Emilly ferrer</a></li>',
    "29": '<li><a href="https://drive.google.com/drive/folders/1goAJEgZtt2jfqy7UGVgfDa8n6WhbHf_b?usp=drive_link" target="_blank">Sarah estanislau</a></li>',
    "30": '<li><a href="https://drive.google.com/drive/folders/18AX1KcBmT5PtuSBiNeIlJUCTZChUPDCP?usp=sharing" target="_blank">Shopie rain</a></li>',
    "31": '<li><a href="https://drive.google.com/drive/folders/1TUzp5rMASnsqM66iZl8PYqd_qyn6U4-w?usp=sharing" target="_blank">Sofyaa baby</a></li>',
    "32": '<li><a href="https://drive.google.com/drive/folders/1TKzE2Om3jOy5LZJg73W2Y-eUMsDRo28P?usp=sharing" target="_blank">Summerxiris</a></li>',
"33": '<li><a href="https://drive.google.com/drive/folders/13e5xd9CU8HSORUD_WNVU43b-DLWx6Uzp" target="_blank">Nathalia neves</a></li>',
"34": '<li><a href="https://drive.google.com/drive/folders/1gaTQGn4fo8ILkZQO_WCz1jkDdytZtO6n" target="_blank">Nathalia neves</a></li>',
"35": '<li><a href="https://drive.google.com/drive/folders/13e5xd9CU8HSORUD_WNVU43b-DLWx6Uzp" target="_blank">Dev sasha</a></li>',
"36": '<li><a href="https://drive.google.com/drive/folders/1gaTQGn4fo8ILkZQO_WCz1jkDdytZtO6n" target="_blank">Nora fawn</a></li>',
"37": '<li><a href="https://drive.google.com/drive/folders/1lMTrB31NByVwySqewtSRdCvCiHoj6Avd" target="_blank">Soap Shaina</a></li>',
"38": '<li><a href="https://drive.google.com/drive/folders/1NIF5CM9un9csl-jqaJv2hXAbPq1BLsDl" target="_blank">Palloma Akemi</a></li>',









"40": '<li><a href="https://drive.google.com/drive/folders/19qL4D53ehGGDVMfE3oLUvdj3qjK3Bh1K?usp=sharing" target="_blank">Queen Evelyn</a></li>',
"41": '<li><a href="https://drive.google.com/drive/folders/1qVAVUo-pN5PFbZPRT_SqPcMC0e9QE2Uh?usp=sharing" target="_blank">Tati Zaqui</a></li>',
"42": '<li><a href="https://drive.google.com/drive/folders/1GWr-dXEfNte6A7AHfGqu1XPv933xTUJH?usp=sharing" target="_blank">Amber Ford</a></li>',
"43": '<li><a href="https://drive.google.com/drive/folders/1_whSW2dvBEJdAcGvLRF6MPo3MLYllIKV?usp=sharing" target="_blank">Cyber Lina</a></li>',
"44": '<li><a href="https://drive.google.com/drive/folders/1NivSZknrUByeaoby6iJxxGrinNAuzpTA?usp=sharing" target="_blank">Lara Rose</a></li>',
"45": '<li><a href="https://drive.google.com/drive/folders/1NivSZknrUByeaoby6iJxxGrinNAuzpTA?usp=sharing" target="_blank">Lara Rose</a></li>',
"46": '<li><a href="https://drive.google.com/drive/folders/1P9SMn8Ak60JmDP_t5kEEVBJigTrGJYx6?usp=sharing" target="_blank">Lilieskyxo</a></li>',
"47": '<li><a href="https://drive.google.com/drive/folders/1HNIQTBY9XU7A60AqZmNjysbRoyeR5RCG?usp=sharing" target="_blank">Gabriela Uribe</a></li>',
"48": '<li><a href="https://drive.google.com/drive/folders/1eQSTL9XqPE_HpSF7mxI7u3NfBxWmUXJ7?usp=sharing" target="_blank">Shiraz baby   <span style="float: right; font-size: 12px; margin-top: 2px; color: red;">Até dia 14/12/2024</span>
 </a></li>',




     
    "fb": '<li><a href="https://drive.google.com/file/d/1TAXriQIk-y7bVnzfLVbSH-xOH6w1PjN4/view" target="_blank">Fantastica fabrica</a></li>',
     "ana": '<li><a href="https://drive.google.com/drive/folders/1-4xhra05Zumj4icTvNOqc4et_wmbTkT0" target="_blank">Ana escola</a></li>',
     "am": '<li><a href="https://drive.google.com/drive/folders/1Z1wHxknosSqacqLCVMPzRt3Z0k5-hc9E" target="_blank">A E M</a></li>',
     "dp": '<li><a href="https://drive.google.com/drive/folders/1tzAKwfZbMvDTQUyQO7qs_JjUHOCC0CIr" target="_blank">Deep Fake</a></li>',
"La": '<li><a href="https://drive.google.com/drive/folders/12aEBVWXleiqS2hVNjwqKxZokPLSk5bAC" target="_blank">Laura</a></li>',
"Nh": '<li><a href="https://drive.google.com/drive/folders/12rCyOoYmoSAUAtS1NE8SztFdvVtmzxu7" target="_blank">Nathalia neves</a></li>',

"JL": '<li><a href="https://drive.google.com/drive/folders/1ayIub2UuZQ2ZsuO2rNdiLJJ5MAcWF4Yy" target="_blank">Juliana Ellwanger Lesnik</a></li>',



};
