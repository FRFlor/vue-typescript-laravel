<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        Hello {{userName}}, your name backwards is "{{backwardsUserName}}".
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

    @Component
    export default class ExampleComponent extends Vue {
        // Props are defined using the Prop decorator
        @Prop({default: 'Unknown'}) protected userName!: string;

        // Life cycle methods are declared just like regular methods
        private mounted(): void {
            console.log('Component mounted.');
        }

        // Computed properties are written as getters
        protected get backwardsUserName(): string {
            return this.userName.split('').reverse().join('');
        }

        // Watchers become much cleaner with Typescript decorators, just place the decorator above
        // the function that will run.
        @Watch('userName')
        private onNameChanged(newName: string): void {
            alert(`I see that you changed your name! ${newName} it is then.`);
        }
    }
</script>
