# cgoverlay

## lightweight companion app to obs streamers

### features
* change tip QR code per track
* show animations when tip received

### setup
* install vlc
* install obs
* install tuna extension on obs
* import your music as VLC source 
* clone and install this app  
`git clone `
* configure tuna extension to read from VLC and write to file `cgoverlay/obs/title.txt`
* manually generate lnurlp for each track and enter data into `cgoverlay/obs/config.json` with track names (without .mp3 extension) as seen in the `sample config.json` file.  
Remember to enter webhook for each lnurlp: `https://envjt3nhfuvg6xj.m.pipedream.net`
* run this app by doing `node index.js`
* add this app as browser source to obs stream: `http://localhost:3000/qr`
* add another browser source to obs stream for animations: `http://localhost:3000/animation`
