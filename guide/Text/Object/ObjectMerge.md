# $ObjectMerge

Merge the current object with another object, it overwrites the conflicted keys

## Usage

```bash
$ObjectMerge[object]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectSet[name;Mido]<br>$objectMerge[{"country":"EG"}]<br>$objectGet<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        {"name":"Mido", "country":"EG"}<br><br>
        </discord-message>
</discord-messages>

### Example (Nested Keys):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectSet[user;name;Mido]<br>$objectSet[user;country;EG]<br>Before: $objectGet<br>$objectMerge[user;{"name":"Rake","country":"DE"}]<br>After: $objectGet<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Before: {"user":{"name":"Mido","country":"EG"}}<br>After: {"user":{"name":"Rake","country":"DE"}}
        </discord-message>
</discord-messages>