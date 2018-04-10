# -*- coding: utf-8 -*-
{
    'name': "Axa Backend Theme",
    'summary': "",
    'author': 'Nexonpos',
    'category': 'hidden',
    'version': '1.0.0',
    'depends': ["web"],
    'data': [
        'views/theme_templates.xml',
    ],
    'qweb': [
        "static/src/xml/*.xml",
    ],
    'application': False,
    'installable': True,
    'auto_install': False,
}