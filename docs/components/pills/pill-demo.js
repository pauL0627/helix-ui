import Util from '../../_util';

if (document.getElementById('vue-pillDemo')) {
    new Vue({
        el: '#vue-pillDemo',
        data: {
            content: 'status: unicorns!',
            isDismissable: false,
        },
        computed: {
            snippet: function () {
                return Util.snippet(`
                    <hx-pill
                      ${this.isDismissable ? 'dismissable' : ''}
                    >
                      ${this.content}
                    </hx-pill>
                `);
            },
        },
    });
}

if (document.getElementById('vue-statusPillDemo')) {
    new Vue({
        el: '#vue-statusPillDemo',
        data: {
            isFilled: false,
            variant: {
                label: 'Default',
                value: '',
            },
            variants: [
                { value: '', label: 'Default' },
                { value: 'hxEmphasisGray', label: 'Emphasis Gray' },
                { value: 'hxEmphasisPurple', label: 'Emphasis Purple' },
                { value: 'hxSubdued', label: 'Subdued' },
            ],
        },
        computed: {
            cssClasses: function () {
                var out = [];
                if (this.variant.value !== '') {
                    out.push(this.variant.value);
                }
                if (this.isFilled) {
                    out.push('hxFill');
                }
                return out.join(' ');
            },
        },
    });
}
