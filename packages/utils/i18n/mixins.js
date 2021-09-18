import { t,use } from './locale'

export default {
  methods: {
    t (...args) {
      return t.apply(this, args)
    }
  }
}