import os
import os.path as op
import functools

import bottle
from bottle import route, run, template, static_file
import markdown


PAGES = {
    'resume.html': {},
    'private_resume.html': {'add_contact_info': True}
}


@route('/')
def index(name='World'):
    files = [f for f in os.listdir('static') if f.endswith('.html')]
    return template('toc', files=files)


@route('/static/<filename:path>')
def send_static(filename):
    if filename in PAGES:
        write_file(filename, **PAGES[filename])
    return static_file(filename, root='./static')


def write_file(filename, **kwargs):
    with open(op.join('static', filename), 'w') as fout:
        fout.write(resume_html(**kwargs))


def resume_html(add_contact_info=False):
    body = markdown.markdown(open('resume.md').read())

    result = template('resume', body=body, add_contact_info=add_contact_info,
        **get_contact_info())

    return result


def get_contact_info():
    result = dict(
        email=os.environ.get('PRIVATE_EMAIL', 'inbox@email.org'),
        phone = os.environ.get('PRIVATE_PHONE', '888.888.8888'),
    )
    for k, v in result.items():
        result[k] = convert_html_entity(v)
    return result


def convert_html_entity(s):
    return ''.join('&#{};'.format(ord(c)) for c in s)


if __name__ == '__main__':
    run(host='localhost', port=8000, debug=True)
