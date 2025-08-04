

# Stuff I'm working on 
This site, first of all. Its been up since July 26th so pay no mind to the incomplete sentences and weird formatting it'll get a bit more polished
<https://clipzy.app>
lets you search any show for dialogue. I used <https://opensubtitles.org> for the dataset. Ideally I could make it into a vector search across *all* subtitles for every movie/show but that would require some serious hardware costing north of $10,000. If I aggressively clean my dataset and do some clever optimizations I could maybe do it on sane hardware.

I'm also creating a dive computer using an android phone. 

# Old projects 
## CartoonFlux
<cartoonflux.com>
A full on saas MVP with payments, accounts, everything. Ultimately it flopped. It's simply outclassed by civitai. Still was good way to get my feet wet with AI image gen. I did NOT enjoy the training process. Technically boring and very hit/miss.

## Bioinformatics File Converter  
<https://bioinf-file-convert-2.pages.dev/>  
**Description:**  
Converts a bam file to a fastq file completely in the browser. This is unique; almost browser based bioinformatics tools do their computation on the server.

## Vault QR  Code Generator  
[Application](https://vaultqrgen.danb.ro)
[Pitch page](https://vaultqr.danb.ro)
 
I made this in college with my friend Ethan Lutz. We even pitched it to an investor he knew! Never went anywhere but it was the first MVP I built.

# Quick ones 
## Breakdown of biblical foods
Easy oneshot with Chatgpt o3, heres the prompt: "Provide a python script to download and search the king james bible for all mentions of food, then take the total occurrences of each item and divide it by the total mentions to produce a percentage. Then render a piechart for each item. You may group similar items/categories, for example, apple, pear, fruit would all be the same category"

![image](https://i.ibb.co/7dD7STLP/food-piechart.png)

# Stuff I host
## Fyxia   
<https://bug.fyxia.dev/api/v1/health>    
<https://auth.fyxia.dev/admin>  
**Description:**  
I just host this for my friend Caleb

## Torrent Streaming Server  
<https://torrent-stream.danb.ro>  
**Description:**  
This is offline apparently

## Minecraft Server (TCP 25565)  
<minecraft.danb.ro>
**Description:**
Because of course.

# on the utility of personal websites 
The internet is firmly in the era of platforms. Frankly, everything on this page could be replicated in my LinkedIn in a more universal, searchable format. The "omg you have a website" 2005 era has passed; it's accessible to anyone - not a technical feat. The reason I made this site was as an exercise in just how convenient I could make the publishing process. It gets synced every hour from my notes app with an n8n workflow, which actually more convenient than updating LinkedIn. As a result, it serves as scratchpad for all the things that *could have* made it on my resume. 

Also, I needed to show off my 4 letter domain name. 

# My Setup, since I've thought a lot about it
Sort of a checklist is so I can quickly get established on any machine but also just my opinions on tooling and stuff. It's good for me to write it down because writing=thinking it is creates an opportunity for me to revamp the tools I use to keep getting better. It's also a reminder for _why_ I chose the tools I did, because I don't want to get stuck in the loop of picking up new things for no new benefit, or revisiting alternatives I've ruled out for good reason

## OS choice

I use Linux Mint on my desktop and Ubuntu LTS for my remote machines. I like the JustWorks philosophy of the Mint project. Its popularity and being based on Ubuntu means support is readily available. I may move to Linux Mint debian edition and Debian for servers if Ubuntu keeps getting more and more corporatized. 

I used windows my whole life and WSL for 2-3 years while I was learning programming in college. I ultimately made the plunge into linux because:
- Windows has extremely poor interoperability between the terminal and its native file system. WSL gives you a working terminal but transferring files between it and the native os is still tedious 
- Networking is messy on WSL
- WSL has stability issues and obscure bugs
- Windows is declining in quality while Linux is getting better
- Telemetry and privacy issues 
- Windows is so non-performant; my PC fans are roaring for basic tasks and I need all 40gb of my RAM

## Arch is silly because
- I rarely require bleeding edge packages 
- For the once a year I do require a bleeding edge package, I can install from source
- Bleeding edge, frequent updates are problematic for servers and for a stable desktop experience
- Sticking to debian distros allows me to develop the most broadly applicable skillset; why learn 2 package managers
- I believe in a good workflow, but customizing everything to be perfect has dimishing returns on productivity

## Setting it up
1. Install [kitty](https://sw.kovidgoyal.net/kitty/binary/). It's crazy how gnome-terminal doesn't support scrollback while selecting stuff for a copy. Ridiculous. Kitty also makes syncing its clipboard with the os clipboard easy.
2. CopyQ, this should be a default program IMO
3. install neovim, [Nerd Font](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.2.1/0xProto.zip), and NVChad
4. VSCode. Yes I use both VSCode and Neovim. I think they complement each other.
5. Brave browser because the built in ad blocker is fantastic. Add Bitwarden and [paywall bypass](https://github.com/iamadamdev/bypass-paywalls-chrome?tab=readme-ov-file)
6. Kde connect so I can send stuff between my phone and pc.
7. Simple Notes
8. docker, docker compose, and [lazydocker](https://github.com/jesseduffield/lazydocker#installation) 
9. Various GUI apps like Discord, Slack, PGAdmin 