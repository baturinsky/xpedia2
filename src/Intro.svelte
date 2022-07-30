<script>
  import { rul } from "./Ruleset";
</script>

<div class="columns">
  <div class="column is-full-touch is-9-desktop">
    <img class="title-image" src="xpedia/images/Title.png" alt="Title art by Anna Zemlina" title="Art by Anna Zemlina. X-Piratez logo by Alla Panova.">
      123{rul.str("Welcome onboard, seagal! Take your bunk at da orlop and have some X-Grog, yarrr!")}
    <br/>
    <h4>{rul.str("Arrr, what da FLUFF is X-Piratez stuff?")}</h4>
      {rul.str("X-Piratez is a total conversion mod designed for OpenXcom, a free open-source reimplementation of UFO")}: {rul.str("Enemy Unknown (1994) and X-Com")}: {rul.str("Terror From The Deep. There are major gameplay differences, as well as a complete overhaul of research, manufacture, base facilities, and so on. X-Piratez is designed for the veteran X-Com player seeking a much longer and complex campaign.")}<br/>
      <br/>
      {rul.str("The year is 2601. The Earth has been long conquered by aliens. You run a gang of mutant pirates. Rob aliens and their human proxies for fun, profit and power. X-Piratez is the biggest OpenXcom mod to date.")}<br/>
      <br/>
      {rul.str("We appreciate Anna Zemlina for her fantastic artworks created especially for the mod.")}
      <div class="columns">
      <div class="column media-bar">
        <a href="https://discordapp.com/invite/b5KXPvX" target="_blank"><img class="media-icon" src="xpedia/images/discord-256.png" alt="Discord" title="Discord server"></a>
        <a href="https://openxcom.org/forum/index.php/board,18.0.html" target="_blank"><img class="media-icon" src="xpedia/images/FG4SCQ58YFXV.png" alt="Forum" title="Forum"></a>
        <a href="https://vk.com/xpiratez" target="_blank"><img class="media-icon" src="xpedia/images/vk-256.png" alt="VK" title="VK community"></a>
        <a href="https://www.deviantart.com/emerald--weapon" target="_blank"><img class="media-icon" src="xpedia/images/Emerald.png" alt="Anna Zemlina (artist)" title="Anna Zemlina (artist)"></a>
      </div>
    </div>
    <h1>{rul.str("Current mod version is")} K3</h1>
      <div class="guide">
      <h2>{rul.str("PC Installation & Update Guide")}</h2>
      <ul class="guide">
        <!--<li>{rul.str("Download the X-Piratez archive via the forum link (the main one) or from mod.io (alternatively.)")}</li>-->
        <li>{rul.str("Unzip the archive to a NEW folder. It strongly recommended not merging the contents with your existing Dioxine_XPiratez folder, as this can lead to various problems.")}</li>
        <li>{rul.str("You need your files of the original UFO")}: {rul.str("Enemy Unknown or X-Com")}: {rul.str("UFO Defense game (either DOS or Steam version) to launch the mod. Copy them to the Dioxine_XPiratez\\UFO folder.")}</li>
        <li>{rul.str("X-Piratez is distributed with the compatible OXCE engine version. There is no need to replace or upgrade OXCE, as other builds may not be compatible with your version of X-Piratez. Because of that, we recommend you turn off the 'Automatic update check' user option (options\\advanced\\general.) This option does not check for updates of the mod itself.")}</li>
        <li>{rul.str("If you already have X-Piratez saves, you can copy them from the old Dioxine_XPiratez\\user\\piratez folder to the new one.")}</li>
        <li>{rul.str("Optionally, you can also copy user settings from the old Dioxine_XPiratez\\user folder to the new one (options.cfg file.)")}</li>
        <li>{rul.str("Optionally, don't delete your outdated version. Just in case.")}</li>
      </ul>
    </div>
    <h4> </h4>
      <div>
        <div class="quote">
          "{rul.str("READ OR DIE. The Bootypedia is your friend. Trust me on that.")}"
        </div>
        <div class="qsign">
          – Dioxine, {rul.str("mod author, lead designer")}
        </div> 
      </div>
      <h4> </h4>
      <div class="warnings">
      <h3><img class="warnings-icon" src="xpedia/images/warning.png" alt="!!">{rul.str("WARNINGS")}</h3>
      <ul class="warnings">
        <li>{rul.str("Contains some NUDITY of both sexes. You've been warned. Also take note this is not any porn-quality T&A since it's not a porn game.")}</li>
        <li>{rul.str("Do not install OpenXcom nightlies! They are not compatible with X-Piratez. (Requires OXCE version.)")}</li>
        <li>{rul.str("If you absolutely can't stand bikini babes fighting Nazis with chainsaws, you may suffer some trauma.")}</li>
        <li>{rul.str("If you're looking for a tactical game that doesn't require brains, try DOTA instead.")}</li>
        <li>{rul.str("A single campaign might take as much as 400 hours.")}</li>
        <li>{rul.str("Contains riddles. Not everything is what it seems.")}</li>
        <li>{rul.str("Read or Die.")}</li>
      </ul>
    </div>
    <br/>
    <div class="cellar">
<!-- Block#1 -->
      <div class="extlink" onclick="window.open('https://www.paypal.com/myaccount/transfer/homepage', '_blank')">
        <img class="extlink-icon" src="xpedia/images/Dioxine.png" alt="Dioxine">
        <br>
        <strong class="man">Dioxine</strong>
        <br>
        {rul.str("mod author, the Grand Master")}
        <br>
        <br>
        {rul.str("You can send your donations through PayPal to")}
        <br>
        GSDioxine@gmail.com
      </div>
<!-- Block#2 -->
      <div class="extlink" onclick="window.open('https://www.paypal.com/myaccount/transfer/homepage', '_blank')">
        <img class="extlink-icon" src="xpedia/images/Meridian.png" alt="Meridian">
        <br>
        <strong class="man">Meridian</strong>
        <br>
        {rul.str("chief OXCE programmer, the Wise Alchemist")}
        <br>
        <br>
        {rul.str("You can send your donations through PayPal to")}
        <br>
        martin.dzurenko@gmail.com
      </div>      
    </div>
    <br/>
    <h4> </h4>
    <div class="cellar">
<!-- Block#3 -->
      <div class="extlink" onclick="window.open('https://www.transifex.com/openxcom/openxcom-mods/dashboard', '_blank')">
        <img class="extlink-icon" src="xpedia/images/TX.png" alt="Transifex">
        <br>
        <strong class="man">{rul.str("Join the Transifex team!")}</strong>
        <br>
        {rul.str("All mods are translated by the players")}
        <br>
        <br>
        {rul.str("OpenXcom needs your translation skills!")}
      </div>
<!-- Block#4 -->      
      <div class="extlink" onclick="window.open('https://discordapp.com/invite/b5KXPvX', '_blank')">
        <img class="extlink-icon" src="xpedia/images/XPZ.png" alt="Troubleshooting here">
        <br>
        <strong class="man">X-Piratez Discord</strong>
        <br>
        {rul.str("Community & support")}
        <br>        
        <br>
        {rul.str("Here you can ask any questions associated with this site.")}
        <br/>
        {rul.str("Ping @Kato_guardian and we will hear you.")}
      </div>      
    </div>
    <br/>
    <h4> </h4>     
    <div class="credits">{rul.str("Thanks to")} Bartojan, Dorothy Haze, Mey-ow & Solarius Scorch
    <br/>
    {rul.str("for translating the homepage and interfaces into non-English languages")}!
    <br/>
    {rul.str("Wiki is powered by")} <a href="https://github.com/baturinsky/xpedia/" target="_blank">Baturinsky's XPedia</a>.
    <br/>
    {rul.str("Mobile version by")} <a href="http://thexcomfiles.xyz/" target="_blank">{rul.str("Finnik, XCF junior developer")}</a>.
    </div>
  </div>
  <div class="column is-hidden-touch is-3-desktop">
  <div class="imgcol" style="background-color:#232727">
      <img class="imgbox" src="xpedia/images/XFox.png" alt="#StandWithXPZ" title="Download links will be available soon">
      <div class="rejoice">#StandWithXPZ</div>
  </div>
  <!--  <button title="Download (main)" class="downloadbtn" onclick=" window.open('https://openxcom.org/forum/index.php/topic,3626.0.html', '_blank'); return false;">{rul.str("Download (forum link)")}</button>
    <button title="Download (alt)" class="downloadbtn" onclick=" window.open('https://openxcom.mod.io/x-piratez', '_blank'); return false;">{rul.str("Download (from mod.io)")}</button> -->
    <div class="imgcol">
      <img class="imgbox" src="xpedia/images/screen035.png" alt="screen035.png">
      <img class="imgbox" src="xpedia/images/screen226.png" alt="screen226.png">
      <img class="imgbox" src="xpedia/images/screen1209.png" alt="screen1209.png">
      <img class="imgbox" src="xpedia/images/screen164.png" alt="screen164.png">
      <img class="imgbox" src="xpedia/images/screen757.png" alt="screen757.png">
      <img class="imgbox" src="xpedia/images/screen1325.png" alt="screen1325.png">
      <img class="imgbox" src="xpedia/images/screen135.png" alt="screen135.png">
      <img class="imgbox" src="xpedia/images/screen692.png" alt="screen692.png">
      <img class="imgbox" src="xpedia/images/screen064.png" alt="screen064.png">
      <!--<img class="imgbox" src="xpedia/images/screen789.png" alt="screen789.png">      -->
    </div>
  </div>
</div>
  

