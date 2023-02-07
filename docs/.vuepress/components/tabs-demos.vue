<template>
    <o-tabs :selected.sync="selectedTab">
        <o-tabs-head>
            <template slot="actions">
                <button>设置</button>
            </template>
            <o-tabs-item name="tab1">Tab1</o-tabs-item>
            <o-tabs-item name="tab2">Tab2</o-tabs-item>
            <o-tabs-item name="tab3">Tab3</o-tabs-item>
        </o-tabs-head>
        <o-tabs-body>
            <o-tabs-pane name="tab1">Tab1相关资讯</o-tabs-pane>
            <o-tabs-pane name="tab2">Tab2相关资讯</o-tabs-pane>
            <o-tabs-pane name="tab3">Tab3相关资讯</o-tabs-pane>
        </o-tabs-body>
    </o-tabs>
</template>

<script>
import Tabs from '../../../src/tabs/tabs'
import TabsHead from '../../../src/tabs/tabs-head'
import TabsBody from '../../../src/tabs/tabs-body'
import TabsItem from '../../../src/tabs/tabs-item'
import TabsPane from '../../../src/tabs/tabs-pane'
export default {

    components: {
        'o-tabs': Tabs,
        'o-tabs-head': TabsHead,
        'o-tabs-body': TabsBody,
        'o-tabs-item': TabsItem,
        'o-tabs-pane': TabsPane
    },
    data() {
        return {
            selectedTab: "tab1"
        }

    }
}
</script>

<style>

</style>