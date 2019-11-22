# iOS Firmware (`ios-firmware-web`)

The [iOS Firmware website](http://ios-firmware-web.herokuapp.com/) is designed to facilitate a one-stop shop for information regarding the firmwares used in iPhone OS, iOS, iPadOS, and tvOS.

## Running a Copy

In order to run a copy of the website, you must first have [Node.js](https://nodejs.org/en/) installed. Then you can run the following:

```bash
> git clone https://github.com/HexwareSoftware/ios-firmware-web
> cd ios-firmware-web
> node server.js
```

After launching the server, a message will appear in the console telling you the server is "live":
```
Server now live at http://localhost:8080/
```
Enter that URL into your favorite browser to begin browsing.

## Roadmap

Ultimately, this website is designed to be a replacement for my popular (but no longer updated) program, [iDecryptIt](https://sourceforge.net/projects/idecryptit/) (with many added features). This includes the ability to display keys for a given firmware, decrypt any firmware file, and more. All the decrypting will be done locally through JavaScript with no server involvement.

## License

The iOS Firmware website is licensed under [GNU Affero General Public License 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) or later.