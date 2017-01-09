# pyvt

## A python virtual tabletop
The goal of this project is to create a virtual tabletop application. There are 
a small handful of others such as ROLZ, OpenRPG and Roll20 but I wanted to make something
that I could access and share the source of, that was more modern using HTML5 features. 

The Feature list presented below is by no means exhaustive, nor complete. Some features
may never be implemented. If you have ideas feel free to submit them as a ticket. Once the
core system is in place, I'll begin versioning the system with a more standard release 
system. Till then, everything is alpha.

### A (Feature|Wish)list
* Chat client
    * Command Parser
    * History Logging (stamped by session)
* Note System
    * Per user
    * Per session
* Map Tool
    * Whiteboard like drawing
    * Sprites
    * Grid (octagon or square)
* Dice Roller

### Technical ideas
* Socket.io
    * namespace chat
    * namespace whiteboard
* System templates
    * mini char sheet for reference
    * roll macros

### a later phase ideas
* Use google actions to look up game rules
    * trigger phrase 'how do I roll'
    * Invocation name 'action/attribute'
    * action phrase 'game system'