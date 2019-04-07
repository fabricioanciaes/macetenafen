<template>
  <Window title="Macetenafen" width="400" height="100" margined v-on:close="exit">
    <Box padded>
      <FormGroup title="">
        <FileInput label="Game file" v-model="options.entry"/>
        <TextInput label="Gamekey" v-model="options.gamekey"/>
      </FormGroup>
      <FormGroup title="Netplay Options">
        <TextInput label="Nick" v-model="options.nick"/>
        <TextInput label="Server IP" v-model="options.server"/>
        <TextInput label="Port" v-model="options.port"/>
      </FormGroup>
      <FormGroup title="">
        <Button v-on:click="play">Play Online</Button>
        <Button v-on:click="playOffline">Play Offline</Button>
      </FormGroup>
        
      
    </Box>
  </Window>
</template>

<script>
import FileInput from './Components/FileInput.vue'
import FormGroup from './Components/FormGroup.vue'
import {saveOptions, getDefaultOptions} from './options.js'
const { exec } = require('child_process')

export default {
  components: {
    FileInput,
    FormGroup
  },
  data() {
    return {
      options: getDefaultOptions()
    }
  },
  methods: {
    exit() {
      saveOptions(this.options);
      this.$exit();
    },
    play() {
      exec(`mednafen -connect -netplay.host ${this.options.server} -netplay.gamekey ${this.options.gamekey} -netplay.port ${this.options.port} "${this.options.entry}"`, {windowsHide: true})
      saveOptions(this.options)
      this.$exit();
    },
    playOffline() {
      exec(`mednafen "${this.options.entry}"`, {windowsHide: true})
      this.$exit();
    }
  }
}
</script>
