#!/bin/bash

ERRORSTRING='Error, no env specified.'

if [ $# -eq 0 ]
    then
        echo $ERRORSTRING;
elif [ $1 == "prod" ]
    then
        if [[ -z $2 ]]
            then
                echo "Gulping"
                gulp build
                echo "Running dry-run"
                rsync --dry-run -az --force --delete --progress --exclude-from=rsync_exclude.txt -e "ssh -p22" ./dist/ bam:/var/www/bam
        elif [ $2 == "go" ]
            then
                echo "Gulping"
                gulp build
                echo "Running actual deploy"
                rsync -az --force --delete --progress --exclude-from=rsync_exclude.txt -e "ssh -p22" ./dist/ bam:/var/www/bam
                ssh bam 'chown -R www-data:www-data /var/www/bam'
        else
            echo $ERRORSTRING;
        fi
fi
