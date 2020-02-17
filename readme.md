# hw1 cloud

## 1)

- Downlaod VirtualBox

  -  https://www.virtualbox.org/wiki/Downloads

- Download Ubuntu
  -  https://ubuntu.com/download/desktop

- Create new VM

![](img/1.png)

- Start VM and install Ubuntu

![](img/2.png)

- Move script to `/script.sh`

  - I did that using `Shared folders`

- Run it:

![](img/5.png)


## 2 A-E

- see script.sh

## 2 F

Create file `sudo nano /etc/rc.local`

```
#!/bin/bash

sh ~/hw1/bin/script.sh
```

Make it executable: `sudo chmod +x /etc/rc.local`


## Result

![](img/3.png)
![](img/4.png)
