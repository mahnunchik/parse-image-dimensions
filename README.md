# parse-image-dimensions

Extract image dimensions by parsing its filename.

* name
* width
* height
* scale

## Supported filename format

* `-<width>` - image-100.png
* `-<width>x` - image-100x.png
* `-<width>x<height>` - image-100x200.png
* `-x<height>` - image-x200.png
* `-<width>x<height>@<scale>x` - image-100x200@2x.png
* `@<scale>x` - image@2x.png

## License

MIT
