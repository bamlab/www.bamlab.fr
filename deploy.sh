#!/bin/bash

ERRORSTRING='Error, no env specified.'

if [ $# -eq 0 ]
    then
        echo $ERRORSTRING;
elif [ $1 == "preprod" ]
    then
        echo "Deploying on preprod"
        if [[ -z $2 ]]
            then
                echo "Gulping"
                gulp build
                echo "Running dry-run"
                rsync --dry-run -az --force --delete --progress --exclude-from=rsync_exclude.txt -e "ssh -p22" ./dist/ root@www.bamlab.fr:/var/www/bam-preprod
        elif [ $2 == "go" ]
            then
                echo "Gulping"
                gulp build
                echo "Running actual deploy"
                rsync -az --force --delete --progress --exclude-from=rsync_exclude.txt -e "ssh -p22" ./dist/ root@www.bamlab.fr:/var/www/bam-preprod
                ssh root@www.bamlab.fr 'chown -R www-data:www-data /var/www/bam-preprod'
        else
            echo $ERRORSTRING;
        fi
elif [ $1 == "prod" ]
    then
        echo "Deploying on prod"
        if [[ -z $2 ]]
            then
                echo "Gulping"
                gulp build
                echo "Running dry-run"
                rsync --dry-run -az --force --delete --progress --exclude-from=rsync_exclude.txt -e "ssh -p22" ./dist/ root@www.bamlab.fr:/var/www/bam
        elif [ $2 == "go" ]
            then
                echo "Gulping"
                gulp build
                echo "Running actual deploy"
                rsync -az --force --delete --progress --exclude-from=rsync_exclude.txt -e "ssh -p22" ./dist/ root@www.bamlab.fr:/var/www/bam
                ssh root@www.bamlab.fr 'chown -R www-data:www-data /var/www/bam'
        else
            echo $ERRORSTRING;
        fi
fi
