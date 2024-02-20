# Exploration

## Sites

The general gameplay loop of exploration is made up of scanning down sites, where a site is a pocket of space which contains enemies, loot,
resources, or a wormhole.

### Combat
A site filled with pirates which can contain valuable loot. Will typically need to be fought with a dedicated combat
ship after being scanned down, and sometimes with assistance from other players.

### Gas
A site filled with valuable gas. These sometimes spawn with enemies inside them, or powerful turrets. Empty gas sites
will sometimes have enemies spawn 5-15 minutes after you begin mining, so keep an eye open for an NPC spawning on you.

### Wormholes
Wormhole systems will always contain at least one wormhole, so you do not need to be afraid of becoming trapped as long
as you have a scanner. More on wormholes in a little bit.

### Hacking
There are two types of hacking sites, "data" and "relic" sites. Both sites tend to contain skill books and blueprint copies.
Data sites also contain decryptors, data cores, and manufacturing materials. Relic sites contain salvage materials.

### Is a Site Safe to Warp to?
The presence of hostile NPCs is indicated by the name of the site.

[Eve University has a page about this](https://wiki.eveuniversity.org/Relic_and_data_sites#Is_this_site_%22safe%22_to_warp_to?).

## Modules

### Probe Launchers
The most important module which is necessary for exploration is the probe launcher. The launcher comes in two variants, the "Core
Probe Launcher" and the "Expanded Probe Launcher". We will be focusing on the first one, as it is what you will use most of the time.
Probe launchers are fit in the high slot.

The core probe launcher is fit with "Core Scanning Probes", you will need 8 of them. In a system with unknown signatures, probes can be launched
and used to scan down a signature. A signature begins with a large area and a scan strength of 0%; it's potential area will decrease and it's scan strength
will increase as you scan it down. Once the scan strength is above 25% you will be able to see what type of site is being scanned down.

Once all signatures or scanned or when you are ready to leave the system, you must recall your probes. The probe recall button is on the scanning menu,
it's an icon right above the button used to launch probes and scan.

**NOTE**: Player ships _do not appear_ for core scanning probes. The expanded probe launcher allows the use of combat probes, which can be used to scan
down player ships. This launcher has significant CPU requirements and is only meant to be fit on special ships.

### Data/Relic Analyzers
If you intend to do data and relic sites, you need a Data Analyzer or Relic Analyzer module. Both are fit in the medium slot. Hacking a data/relic
site involves going from can to can in the site and playing the hacking minigame. The hacking minigame is explained at [this Eve University page](https://wiki.eveuniversity.org/Hacking).

### Safety
The most commonly used safety module is the Covert Ops Cloaking Device. This module is fit in a high slot and allows your ship to fly and warp
while invisible. While cloaked, your ship will not appear on d-scan. This module can only be fit on specific kinds of ships. The most commonly used
exploration ships with this device are the T2 Covert Ops frigates and the faction exploration frigate, the Astero.

Exploration ships are typically fragile, especially the commonly used frigates. It is typical to fit them with Damage Control modules (which increase
resistance to damage), warp core stabilizers (which protect from warp disruptors), and inertial stabilizers (which make it faster to enter warp).

**NOTE**: Fitting a warp core stabilizer comes with drawbacks. It reduces your maximum target range, reduces the amount of drones you can use,
and lowers the speed at which you can lock onto enemy ships. It is a purely defensive module and reduces your offensive power. It is also an _active_
module, it must be turned on when you are going to be warp disrupted to negate the warp disruption. After activation, it has a cooldown before it can
be used again.

## Bookmarks
Bookmarks allow you to save a location to find it later. Our corporation has a bookmarks folder which allows us to all use the same
bookmarks. This is vital for fleet operations where one scout will scan down a site, like a wormhole, that other fleet members must go to. A bookmark
can be created with the CTRL + B shortcut.

A gas, combat, or data/relic site can be saved with the automatically populated name.

Bookmarking wormholes is not like bookmarking other sites. It is vital that the wormhole bookmark bring you to the wormhole within immediate jumping range
for safety. The signature for a wormhole will bring you ~10km out from it. Because of this, you must bookmark a wormhole by warping to it, right clicking
the wormhole itself, and saving its location. We use a standardized naming system for wormholes. A wormhole bookmark should take the first three characters
from its signature ID followed by the system it brings you to. If a wormhole has a signature of "123-4567" and goes to a low-sec system, its bookmark should
be named "123 LOW".

Bookmarks also have an expiration time. When you make a corporation bookmark, please make sure that it is set to expire in 2 days when it is created.
The expiration time is set below its name when creating the bookmark. This prevents our folder from being flooded with bookmarks.

## Wormholes
Wormholes allow instantaneous movement between linked systems. Wormholes be linked to high, low, and null security systems. They can also
be linked to special wormhole systems, referred to as j-space. A wormhole system has no NPC stations, no stargates, and can only be entered or
exited using wormholes. A ship in a wormhole system with no scanner and no bookmarked exit is trapped and must self destruct to exit.

Wormhole systems, much like null sec, have no rules. You must assume that any player in a wormhole who is not in your fleet is out to find and
kill you.

### Classification
Wormhole systems have a "classification" which determines how strong the NPC enemies are and how much loot the system contains. Wormholes with a
higher classification are referred to as being "deeper" in wormhole space, as they are less likely to directly connect to known space.

The classification of a wormhole system can be determined by looking its wormhole before entering it. The appearance of a wormhole will always
tell you where it goes. [This Eve University page](https://wiki.eveuniversity.org/Visual_wormhole_identification) shows what a wormhole for each
classification level looks like.

### Effects
Some wormhole systems contain system-wide effects. A Pulsar effect, for example, will increase the strength of shields and decrease the strength
of armor and the effectiveness of your capacitor. The numerical values of these effects are determined by the classification of the wormhole, where
the effects are more extreme at higher classification.

### How To Not Get Trapped
If you do not have a scanner, you must be extremely careful to not get trapped in a wormhole system. Wormholes have two separate "health bars" where one
is determined by time and the other is determined by usage. It is vital to check the information box of a wormhole that will be used to see
what its status is for both of these health bars.

#### Lifetime
A wormhole spawns with a lifetime of 1-2 days. The info box displays the following options for its remaining time-life:

| Description                | Time Remaining        |
| -------------------------- | --------------------- |
| not yet begun              | 24+ hours             |
| beginning to decay         | 4 to 24 hours         |
| reaching the end           | ~5 minutes to 4 hours |
| dissipating into the ether | Will die any second   |

Once a wormhole has hit the "reaching the end" threshold, it will visibly shake.

#### Mass
Every time a ship passes through a wormhole, the wormhole is damaged. The more the ships mass, the more damage is done. The amount of mass-health
a wormhole spawns with is determined by the maximum ship size which can pass through it. The information box will tell you what this size is.
Certain modules increase the mass of your ship, like afterburners, micro-warp drives, and armor plates. It is possible to right click these modules
and turn them offline to temporarily lower the mass of your ship and lessen the damage being done to a wormhole. This is much more important for fleet
operations, where many people must go through a hole before it dies.

The info box displays the following options for its remaining mass-life:
| Description                    | Mass Remaining      |
| ------------------------------ | ------------------- |
| not yet                        | 50% to 100%         |
| not to a critical degree       | 10% to 50%          |
| stability critically disrupted | less than 10%       |

Any wormhole that has been disrupted or is reaching the end of its life should be considered close to death, and should be constantly monitored to ensure
an exit route.

#### Bookmarks
Every single time you jump into a new system from a wormhole, the very first thing you should do is check if it has already been bookmarked by our corp. If it
hasn't (which will be the case for solo exploration) then you must bookmark the wormhole you just entered from and name it "HOME". This naming convention
allows you to establish an easy to read chain or breadcrumb back home out of the wormholes you're exploring.

When bookmarking the system, please put wormhole bookmarks in the "wormholes" folder and everything else in the "sites" folder. Make sure all bookmarks have
an expiration of 2 days.

## Staying Safe
Exploration is dangerous. Exploration ships are valuable, easy to kill, and often contain expensive loot. That makes them a large target.

### Positioning
When you warp into a system do not sit on the warp gate or wormhole while you scan. It is best practice to make a temporary safe bookmark, but warping to a random planet/moon is generally good enough unless you have identified another player in system.

### Safe Bookmark
A "Safe" is a special kind of bookmark. A safe can be made by creating a bookmarp while you are in mid warp. A "True safe" is made by creating a safe, warping
to it, and then creating a second safe using the first one as a starting location. A safe bookmark allows you to warp to a completely random spot in a system
which nobody else can reach unless they have your bookmark or scan you down while you are at your safe. It is important to note that enemies can still scan
you down if they have combat scanner probes and warp directly to you. Because of this, it is extremely important to still check d-scan while at a safe to see
if any probes appear.

### Local Chat
When exploring in low and null security space, you should keep local chat open. Be on guard if there are people you do not know in local chat. If anybody
in the local chat has a red box next to their name then they are in a corporation we have identified as an enemy and are likely pirates, you should hide
or leave immediately.

### D-Scan
The directional scanner is your best friend while exploring. The "V" key is the shortcut to d-scan, and you should be hitting it every 1-2 seconds if you
are in low/null sec with strangers in local chat and every time you are in wormhole space. When searching for threats, make sure the d-scanner is set to the
maximum range (14.3 AU) and the maximum angle (360 degrees). If you see an enemy ship in d-scan, hide or leave.

The d-scanner can also be used to hunt and find other players. You can reduce its angle to "scan down" an enemy ship. Unlike scan probes, which are visible
on d-scan, the d-scan itself cannot be traced. If you are in a cloaked ship you can d-scan an enemy down while leaving absolutely no trace of your presence.
Keep in mind that this can be done to you.

### Wormholes Vs. Low Sec
Wormholes do not have a populated local chat. This means that somebody else can be in a wormhole with you and they _will not_ appear on the local chat
unless they type in it. Because of this, you must constantly be using your d-scan in a wormhole to check for enemy players. Do not speak in local chat, as
it will alert other players in the wormhole of your presence.

### Combat Scanner Probes
Combat scanner probes are special scanner probes which have the same capability as core scanner probes, except they can also scan down players, drones,
and player structures. If you see combat scanner probes on d-scan, especially if you are at a site or safe bookmark, assume that you are being hunted and
leave or cloak immediately.

## Third Party Resources

[Eve University](https://wiki.eveuniversity.org/Exploration)
