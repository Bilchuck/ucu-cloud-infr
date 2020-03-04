#!/bin/sh

# Create folder
mkdir ~/hw1/
mkdir ~/hw1/bin/
# Copy to hw1/bin
cp /script.sh ~/hw1/bin/
# make itself executable
chmod ugo+x ~/hw1/bin/script.sh


PARAM=$1
DEFAULT=111
NUMBERS=${PARAM:-$DEFAULT}
i=0
current_file=0

# Loop
while [ $i -lt $NUMBERS ]
do
  # Create new file on every 5 nnumbers
  round=$(($i % 5))

  if [ $round = 0 ];
  then
    rand=$RANDOM
    current_file=~/hw1/bin/$RANDOM.txt
  fi
  # Write file
  # Random float have format 12345.67
  echo $RANDOM.$(($RANDOM%100)) >> $current_file
  # i++
  i=$(( $i + 1 ))
done

echo "Done!"