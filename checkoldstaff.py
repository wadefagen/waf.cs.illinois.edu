#!/usr/bin/env python3

import yaml
import os

# Get netids of current staff from file
with open('_data/staff.yaml', 'r') as stream:
  staff = yaml.safe_load(stream)
netids = [key.lower() for key in staff]

# Get list of all netids we have photos for
photos = os.listdir('static/cs225/staff/photos')
photos = [photo.lower().replace('.jpg', '') for photo in photos]
# Manually exclude the blank profile image
photos.remove('blank_profile.png')

# Compute set difference
diff = set(photos) - set(netids)

# Back to list, sort, and print!
for netid in sorted(list(diff)):
  print(netid)
