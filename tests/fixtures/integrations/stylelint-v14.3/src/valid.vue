<style>
a {
    color: red;
}

:global(.foo),
::v-deep(.foo),
::v-slotted(.foo),
::v-global(.foo),
:deep(.foo),
:slotted(.foo) {
    color: red;
}
</style>