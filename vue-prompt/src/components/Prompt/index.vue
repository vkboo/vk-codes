<template>
    <div class="prompt-container">
        <div class="message">
            <h2>{{message}}</h2>
            <button @click="onOk">OK</button>
            <button @click="onCancel">CANCEL</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Prompt',
    props: {
        message: { type: String, default: '默认提示内容', },
        onOk: { type: Function, default: () => {}, },
        onCancel: { type: Function, default: () => {}, },
    },
    created () {
        console.log(this.$createElement)
    }
}
</script>

<style lang="css" scoped src="./style.css">