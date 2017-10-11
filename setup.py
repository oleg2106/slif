"""Setup for slif XBlock."""

import os
from setuptools import setup


def package_data(pkg, roots):
    """Generic function to find package_data.

    All of the files under each of the `roots` will be declared as package
    data for package `pkg`.

    """
    data = []
    for root in roots:
        for dirname, _, files in os.walk(os.path.join(pkg, root)):
            for fname in files:
                data.append(os.path.relpath(os.path.join(dirname, fname), pkg))

    return {pkg: data}


setup(
    name='slif-xblock',
    version='0.99',
    description='slif XBlock',   # TODO: write a better description.
    packages=['slif'],
    install_requires=[
        'XBlock',
    ],
    entry_points={
        'xblock.v1': 'slif = slif:ShowLessonInIframeXBlock',        
    },
    package_data=package_data("slif", ["static", "templates", "public"]),
)
