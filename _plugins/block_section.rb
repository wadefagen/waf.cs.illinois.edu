module Jekyll
  class BlockSection < Liquid::Block

    def initialize(tag_name, markup, tokens)
      super

      @title = markup
    end



   def render(context)
      site = context.registers[:site]
      converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
      text = converter.convert(super(context))

      #"<div class=\"card px-2 mb-3\">#{text}</div>"
      "<div class=\"card box-shadow px-2 mb-3\"><div class=\"card-body\"><h4 class=\"card-title\">#{@title}</h4>#{text}</div></div>"
    end

  end
end

Liquid::Template.register_tag('card', Jekyll::BlockSection)