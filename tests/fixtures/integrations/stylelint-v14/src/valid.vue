<style>
a {
    color: v-bind(color);
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