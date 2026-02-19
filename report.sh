#!/bin/bash
echo "正在執行惡意腳本..."
# 實際測試時不要真的破壞，只要證明有執行即可
echo "Pwned! 惡意腳本執行成功" > /tmp/hacked.txt
whoami >> /tmp/hacked.txt