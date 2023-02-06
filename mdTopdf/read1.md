# Hayabusa
![](https://www.totalmotorcycle.com/motorcycles/2016/2016-Suzuki-Hayabusa4.jpg)

![](https://wallup.net/wp-content/uploads/2019/09/925707-hayabusa-suzuki-gsx1300r-superbike-bike-motorbike-motorcycle-gsx-muscle.jpg)


# Administration Menu

The Administration Menu module displays the entire administrative menu tree
(and most local tasks) in a drop-down menu, providing administrators one- or
two-click access to most pages.

For a full description of the module, visit the
[project page](https://www.drupal.org/project/admin_menu).

Submit bug reports and feature suggestions, or track changes in the
[issue queue](https://www.drupal.org/project/issues/admin_menu).


## Table of contents

- Requirements
- Recommended modules
- Installation
- Configuration
- Troubleshooting
- FAQ
- Maintainers


## Requirements

This module requires the following modules:

- [Views](https://www.drupal.org/project/views)
- [Panels](https://www.drupal.org/project/panels)


## Recommended modules

[Markdown filter](https://www.drupal.org/project/markdown): When enabled,
display of the project's README.md help will be rendered with markdown.


## Installation

Install as you would normally install a contributed Drupal module. For further
information, see
[Installing Drupal Modules](https://www.drupal.org/docs/extending-drupal/installing-drupal-modules).


## Configuration

1. Enable the module at Administration > Extend.
1. When creating a new field on a content type or custom entity type, choose
   "Double Field" from the drop-down menu.
1. On the Field Settings form for the Double Field, define the two subfields
   as you would with any other field.
1. Optionally, on the "Edit" form for the Double Field, you may choose
   options for whether or not the subfields are "required".


## Troubleshooting

If the menu does not display, check the following:

- Are the "Access administration menu" and "Use the administration pages and
  help" permissions enabled for the appropriate roles?
- Does html.tpl.php of your theme output the `$page_bottom` variable?


## FAQ

**Q: I want to prevent robots from indexing my custom error pages by
setting the robots meta tag in the HTML head to "noindex".**

**A:** There is no need to. **Customerror** returns the correct HTTP
status codes (403 and 404). This will prevent robots from indexing the
error pages.

**Q: I want to customize the custom error template output.**

**A:** In your theme template folder for your site, copy the template
provided by the **Customerror** module
(i.e. `templates/customerror.html.twig`) and then make your
modifications there.

**Q: I want to have a different template for my 404 and 403 pages.**

**A:** Copy `customerror.html.twig` to
`customerror--404.html.twig` and `customerror--403.html.twig`. You
do not need a `customerror.html.twig` for this to work.


## Maintainers

- Daniel F. Kudwien - [sun](https://www.drupal.org/u/sun)
- Peter Wolanin - [pwolanin](https://www.drupal.org/u/pwolanin)
- Stefan M. Kudwien - [smk-ka](https://www.drupal.org/u/smk-ka)
- Dave Reid - [Dave Reid](https://www.drupal.org/u/dave-reid)