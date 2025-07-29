

# Stuff I'm working on 
This site, first of all. Its been up since July 26th and it's definitely not finished yet so pay no mind to the incomplete sentences and weird formatting 
<https://clipzy.app>
lets you search any show for dialogue. I used <https://opensubtitles.org> for the dataset. Ideally I could make it into a vector search across *all* subtitles for every movie/show but that would require some serious hardware costing north of $10,000. If I aggressively clean my dataset and do some clever optimizations I could maybe do it on sane hardware.

# on the utility of personal websites 
The internet is firmly in the era of platforms. Frankly, everything on this page could be replicated in my LinkedIn in a more universal, searchable format. The "omg you have a website" 2005 era has passed; it's accessible to not a technical feat anymore. 

This site gets synced every hour from my notes app with an n8n workflow.

# Link dumps and a old projects 
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


# MySetup
Sort of a checklist is so I can quickly get established on any machine but also just my opinions on tooling and stuff. It's good for me to write it down because writing=thinking it is creates an opportunity for me to revamp the tools I use to keep getting better. It's also a reminder for _why_ I chose the tools I did, because I don't want to get stuck in the loop of picking up new things for no new benefit, or revisiting alternatives I've ruled out for good reason

## OS choice

I use Linux Mint on my desktop and Ubuntu LTS for my remote machines. I like the JustWorks philosophy of the Mint project. Its popularity and being based on Ubuntu means support is readily available. I may move to Linux Mint debian edition and Debian for servers if Ubuntu keeps getting more and more corporatized. 

I used windows my whole life and WSL for 2-3 years while I was learning programming in college. I ultimately made the plunge into linux because:
- Windows has extremely poor interoperability between the terminal and its native file system. WSL gives you a working terminal but transferring files between it and the native os is still tedious 
- Networking is very messy on WSL
- WSL has stability issues and obscure bugs
- Windows is declining in quality while Linux is getting better
- Telemetry and privacy issues 
- Windows is so non-performant; my PC fans are roaring for basic tasks and I need all 40gb of my RAM

## I'm *NOT* considering Arch because
- I rarely require bleeding edge packages 
- For the once a year I do require a bleeding edge package, I can install from
- Bleeding edge, frequent updates are problematic for servers and for a stable desktop experience
- Sticking to debian distros allows me to develop the most broadly applicable skillset; why learn 2 package managers
- I believe in a good workflow, but customizing everything to be perfect has dimishing returns on productivity

# Checklist for Linux Mint

### Terminal config, tools, and common dependencies

1. Install [kitty](https://github.com/alacritty/alacritty/blob/master/INSTALL.md) because it's fast and I like its default looks and config.
   
   Remember to use the x11/wayland specific flags. It also works very well with tmux (it has to, it has no tabs) which I like to use anyway for persistent remote sessions.
   
   - `alias ssh="TERM=xterm-256color ssh"` is a good idea because TERM=alacritty isn't super compatible (yet, hopefully this changes). 

2. `apt install tmux` 

3. Install a [Nerd Font](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.2.1/0xProto.zip) because it's pretty

4. Install Rust/cargo using rustup

5. Install latest python version

6. ripgrep

7. install neovim

8. customize neovim `git clone https://github.com/Danjoe4/kickstart.nvim ~/.config/nvim`

### GUI tools

1. VSCode 
2. Brave browser
3. CopyQ, gives clipboard history
4.  Typora, a simple markdown editor. I like having a dedicated markdown/text editor to use as a todo list and scratchpad.  Obsidian/vscode/nvim/notion etc all feel too "involved". I want my notes app to be unobtrusive. 
5. Kde connect
6. Simple Notes
      
    
      

### Docker tools

1. Install docker
2. echo "alias lzd='docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock -v ~/.config:/.config/jesseduffield/lazydocker lazyteam/lazydocker'" >> ~/.bashrc; source ~/.bashrc; 
3. Add your user to the docker group
4. Install compose plugin as well
5. **Note*: Install docker-ce and don't use the package manager

### Browser

1. Brave
2. add paywall bypass: https://github.com/iamadamdev/bypass-paywalls-chrome?tab=readme-ov-file
3. add bitwarden extension


### Other GUI apps

- Discord, Slack, ThunderBird, various Crypto wallets, Haveno, LibreOffice Suite, VirtualBox, okular


