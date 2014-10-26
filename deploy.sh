#!/bin/sh
set +x

gulp build
scp -r dist/* bam:/var/www/bam
ssh bam 'chown -R www-data:www-data /var/www/bam'
