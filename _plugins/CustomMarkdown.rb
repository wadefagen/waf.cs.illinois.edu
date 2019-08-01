module Kramdown
  # Add some bootstrap4 specific defaults to markdown output
  class Converter::HtmlBootstrap4 < Converter::Html
    def convert_table(el, indent)
      el.attr["class"] ||= 'table'
      super
    end
  end
end

class Jekyll::Converters::Markdown::CustomMarkdown
  def initialize(config)
    @config = config["kramdown"] || {}
  end

  def convert(content)
    Kramdown::Document.new(content, @config).to_html_bootstrap4
  end
end
