
    // validation mixin
    import Vue from "vue"
    export default Vue.extend({
        data(){
          return{
            values:{},
            errors:{}
          }
        },
        methods: {
          // validate selected info box
          async validate(field: string, Schema: any) {
            Schema.validateAt(field, this.values)
              .then(() => {
                (this.errors as any)[field] = "";
              }).catch((err: any) => {
              (this.errors as any)[field] = err.message;
            })
          },
          // validate all info boxes
          async validateAll(Schema: any) {
            return new Promise((resolve) => {
              Schema.validate(this.values, { abortEarly: false })
                .then(() => {
                  resolve(true)
                })
                .catch((err: any) => {
                  err.inner.forEach((error: any) => {
                    this.errors = { ...this.errors, [error.path]: error.message };
                  });
                  resolve(false)
                })
            })
          }
        }
      }
    )
