# Setup

* Follow [Jekyll](https://jekyllrb.com/docs/installation/)'s installation guide.
* Install the necessary gems with `bundle install`
* Finally, run the site with `bundle exec jekyll serve`

By default, the site will build as it does on the production website, with unpublished
MPs and labs not appearing on the site. To build with those included, run
`bundle exec jekyll serve --unpublished` instead. A Makefile has been provided
to make this slightly easier: `make serve`.

# Publishing and Removing

As soon as you commit to `master`, the website will regenerate and publish.

To publish:

* Change the `published` field in the front-matter to `true`

# Photo Attributions

All photos are licensed from [pexels](https://www.pexels.com/photo-license/) and [pixbay](https://pixabay.com/en/blog/posts/public-domain-images-what-is-allowed-and-what-is-4/)
, both of which are CC0 stock photos databases

