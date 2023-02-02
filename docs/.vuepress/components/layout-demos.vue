<template>
    <div class="wrapper">
        <o-layout class="layout-wrapper">
            <o-header class="header-wrapper"> header </o-header>
            <o-layout class="layout-wrapper">
                <o-sider class="sider-wrapper"> sider </o-sider>
                <o-content class="content-wrapper"> content </o-content>
            </o-layout>
            <o-footer class="footer-wrapper"> footer </o-footer>
        </o-layout>
        <br>
        <o-layout class="layout-wrapper">
            <o-header class="header-wrapper"> header </o-header>
            <o-content class="content-wrapper"> content </o-content>
            <o-footer class="footer-wrapper"> footer </o-footer>
        </o-layout>
        <br>
        <o-layout class="layout-wrapper">
            <o-header class="header-wrapper"> header </o-header>
            <o-layout class="layout-wrapper">
                <o-sider class="sider-wrapper"> sider </o-sider>
                <o-layout class="layout-wrapper">
                    <o-content class="content-wrapper"> content </o-content>
                    <o-footer class="footer-wrapper"> footer </o-footer>
                </o-layout>
            </o-layout>
        </o-layout>
    </div>
</template>

<script>
import Header from '../../../src/layouts/header'
import Content from '../../../src/layouts/content'
import Sider from '../../../src/layouts/sider'
import Footer from '../../../src/layouts/footer'
import Layout from '../../../src/layouts/layout'
export default {
    components: {
        'o-header': Header,
        'o-content': Content,
        'o-sider': Sider,
        'o-footer': Footer,
        'o-layout': Layout
    },
    data() {
        return {
            layoutClass: {
                hasSider: false
            },
        }
    }
}
</script>
<style lang="scss" scoped>
$background: #3eaf7c;

.wrapper {
    >.layout-wrapper {
        height: 30vh;

        >.header-wrapper {
            height: 3em;
            background: $background;
        }

        >.content-wrapper {
            background: lighten($background, 40%);
        }

        >.layout-wrapper {
            height: 6em;

            >.sider-wrapper {
                width: 3em;
                background: lighten($background, 15%);
            }

            >.content-wrapper {
                background: lighten($background, 40%);
            }

            >.layout-wrapper {
                >.content-wrapper {
                    background: lighten($background, 40%);
                }

                >.footer-wrapper {
                    background: $background;
                }
            }
        }

        >.footer-wrapper {
            background: $background;
        }
    }
}
</style>