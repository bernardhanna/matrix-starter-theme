<footer class="{{ $containerClasses }} mt-12">
    <div class="{{ $containerInnerClasses }}">
        @php(dynamic_sidebar('sidebar-footer'))

        <p class="my-6">
            <a href="https://roots.io/matrix/" class="flex items-center gap-2 font-bold hover:text-underline">
                <x-icon-matrix class="w-4 h-4" />
                Built with matrix
            </a>
        </p>
    </div>
</footer>
