# Skinny Bones Gemfile
source "https://rubygems.org"

gem 'jekyll', '~> 2.4.0'
gem 'jekyll-sitemap', '~> 0.6.1'
gem 'sass'
gem 'octopress', '~> 3.0.0.rc.12'

require 'rbconfig'
gem 'wdm', '>= 0.1.0' if RbConfig::CONFIG['target_os'] =~ /mswin|mingw/i

source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']