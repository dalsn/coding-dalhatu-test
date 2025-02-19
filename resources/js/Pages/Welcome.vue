<template>
    <div>
        <Head title="Find Common Core Standards" />
        <div class="bg-gray-100 min-h-screen">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
                <div class="mx-auto max-w-3xl py-12">
                    <h1 class="text-5xl font-bold">Find Common Core standards for any lesson, unit, or curriculum plan.</h1>

                    <ul class="mt-10 text-base leading-7 space-y-2">
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-5 flex-none text-purple-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p class="font-bold text-xl">Find your standards.</p>
                                <p class="text-gray-500 text-sm">Browse by grade, subject, and topic.</p>
                            </div>
                        </li>

                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-5 flex-none text-purple-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p class="font-bold text-xl">Copy your standards.</p>
                                <p class="text-gray-500 text-sm">Copy-paste the standards into your plan.</p>
                            </div>
                        </li>

                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-5 flex-none text-purple-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p class="font-bold text-xl">That’s it!</p>
                                <p class="text-gray-500 text-sm">Your plan is now aligned with Common Core.</p>
                            </div>
                        </li>
                    </ul>

                    <h1 class="text-2xl font-bold mt-10 mb-3">Click on any subject below to get started</h1>
                    <div class="rounded-md border-2 px-6 pb-6 mb-10">
                        <dl class="space-y-6 divide-y divide-gray-900/10">
                        <Disclosure as="div" v-for="(standard, index) in standards" :key="index" v-slot="{ open }" class="pt-6">
                            <dt>
                            <DisclosureButton class="flex w-full text-left text-gray-900">
                                <span class="mr-6 flex h-7 items-center">
                                <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                                <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                                </span>
                                <span class="text-base font-semibold leading-7">{{ standard.name }}</span>
                            </DisclosureButton>
                            </dt>
                                <transition
                                enter-active-class="transition duration-500 ease-out"
                                enter-from-class="transform scale-95 opacity-0"
                                leave-active-class="transition duration-75 ease-out"
                                leave-from-class="transform scale-100 opacity-100"
                                leave-to-class="transform scale-95 opacity-0"
                                >
                                    <DisclosurePanel as="dd" class="mt-2 pr-12">
                                        <grades :grades="standard.grades" />
                                    </DisclosurePanel>
                                </transition>
                        </Disclosure>
                        </dl>
                    </div>


                    <div>
                        <div v-if="selectedStandards.length">
                            <div class="mb-8">
                                <h1 class="text-3xl font-bold">
                                    Your Selected Common Core Standards
                                </h1>
                                <div class="flex space-x-4 mt-3">
                                    <button
                                        @click="copyStandards"
                                        class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-red-200 hover:bg-red-100 hover:text-red-500"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-3">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                        </svg>

                                        Copy Standards
                                    </button>

                                    <button
                                            @click="clearAllStandards"
                                            class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-red-200 hover:bg-red-100 hover:text-red-500"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            Clear all
                                    </button>

                                    <button
                                            @click="print"
                                            class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-red-200 hover:bg-red-100 hover:text-red-500"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-3">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                                            </svg>

                                            Print
                                    </button>
                                </div>
                            </div>

                            <div class="flow-root">
                              <ul role="list" class="-my-5 divide-y divide-gray-200" ref="standards">
                                <li v-for="(standard, index) in selectedStandards" :key="index" class="py-4">
                                  <div class="flex items-center space-x-4">
                                    <div class="min-w-0 flex-1">
                                      <p class="font-bold text-gray-900">{{ standard.code }}</p>
                                      <p class="text-sm text-gray-500">{{ standard.description }}</p>
                                    </div>
                                    <div>
                                        <a
                                            @click.prevent="removeStandard(standard)"
                                            href="#"
                                            class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-red-200 hover:bg-red-100 hover:text-red-500"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-3">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            Remove
                                        </a>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                        </div>
                        <div class="rounded-md bg-blue-50 p-4" v-else>
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-blue-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </div>
                                <div class="ml-3 flex-1 md:flex md:justify-between">
                                    <p class="text-sm text-blue-600">
                                        You have not selected any standard. Your selected standards will appear here.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Head } from '@inertiajs/vue3';

    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
    import standards from '../standards.js'
    import Grades from '@/Components/Grades.vue';
    import { mapGetters } from 'vuex'

    export default {
        components: {
            Head,
            Disclosure,
            DisclosureButton,
            DisclosurePanel,
            MinusSmallIcon,
            PlusSmallIcon,
            Grades
        },
        computed: {
            ...mapGetters({
                selectedStandards: 'standards/selectedStandards'
            }),
        },
        data () {
            return {
                label: "Copy Standards"
            }
        },
        methods: {
            // Implement these methods:

            removeStandard (standard) {
                this.$store.dispatch('standards/removeItemFromStandards', standard)
            },
            clearAllStandards () {
                this.$store.dispatch('standards/clearStandards')
            },
            copyStandards () {
                let text = this.selectedStandards.map(standard => `${standard.code}: ${standard.description}`).join(', ')

                navigator.clipboard.writeText(text)
                    .then(() => {
                        this.label = "Copied!"
                        setTimeout(() => this.label = "Copy Standards", 500)
                    })
            },
            print () {}
        },
        created() {
            this.standards = standards;
        }
    }
</script>
