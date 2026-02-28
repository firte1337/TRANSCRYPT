```bash
┌──(root㉿kali)-[~/tools/silentbyte]
└─$ ./silentbyte

   ███████╗██╗██╗     ███████╗███╗   ██╗████████╗██████╗ ██╗   ██╗████████╗███████╗
   ██╔════╝██║██║     ██╔════╝████╗  ██║╚══██╔══╝██╔══██╗╚██╗ ██╔╝╚══██╔══╝██╔════╝
   ███████╗██║██║     █████╗  ██╔██╗ ██║   ██║   ██████╔╝ ╚████╔╝    ██║   █████╗
   ╚════██║██║██║     ██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗  ╚██╔╝     ██║   ██╔══╝
   ███████║██║███████╗███████╗██║ ╚████║   ██║   ██████╔╝   ██║      ██║   ███████╗
   ╚══════╝╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═════╝    ╚═╝      ╚═╝   ╚══════╝

SILENTBYTE — client-side offensive/utility toolkit
version 3.3 (2026)
status: stable
┌──(root㉿kali)-[~/tools/silentbyte]
└─$ ./silentbyte help
Usage: silentbyte [command]

Available commands:

  help        show this help message
  install     initialize local environment
  update      simulate version update
  list        show available modules
  run         start toolkit runtime
┌──(root㉿kali)-[~/tools/silentbyte]
└─$ ./silentbyte install
[+] Checking environment...
[+] Browser runtime detected
[+] No backend required
[+] No dependencies required
[+] Initializing modules...

[ OK ] transliteration
[ OK ] base64
[ OK ] invisible_char
[ OK ] password_gen
[ OK ] ascii_art

[✓] Installation complete
┌──(root㉿kali)-[~/tools/silentbyte]
└─$ ./silentbyte update
[+] Fetching latest build metadata...
[+] Current version: 3.3
[+] Checking remote signature...
[-] Remote server: not configured
[!] Client-side standalone mode enabled
[✓] You are running the latest version
┌──(root㉿kali)-[~/tools/silentbyte]
└─$ ./silentbyte list
01  transliteration   ru → latin (multi-standard)
02  base64            encode / decode
03  invisible_char    unicode U+3164
04  password_gen      secure random generator
05  ascii_art         text → canvas render
┌──(root㉿kali)-[~/tools/silentbyte]
└─$ ./silentbyte run
[+] Launching browser execution context...
[+] Loading HTML5
[+] Loading CSS3
[+] Loading Vanilla JavaScript
[+] Initializing Canvas API

[ OK ] Runtime ready
[ OK ] All operations local
[ OK ] No outbound traffic

root@kali:~/tools/silentbyte$ _
