<template>
    <ul class="children global-list">
        <li v-for="(reply,index) in comment.comment_replies"
            :key="'reply'+index">
            <div class="comment_info">
                <div class="commenter-avatar" v-if="reply.user">
                    <router-link :to="{ name : 'dashboard' }"><img
                        class="img-fluid"
                        :src="reply.user.profile_image"
                        :alt=" reply.user.full_name"></router-link>
                </div>
                <div class="comment-box" v-if="reply.user">
                    <div class="comment-title">
                                                                <span class="title-1"><router-link
                                                                    :to="{ name : 'dashboard' }"
                                                                    class="url">{{ reply.user.full_name }}</router-link></span>
                        <div class="comment-meta">
                            <ul class="global-list">
                                <li>
                                    <router-link :to="{ name : 'profile' }">
                                        {{ reply.reply_date }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div><!-- /.comment-box -->
                <p>{{ reply.comment }}</p>
                <form @submit.prevent="commentReply(comment.id,reply.id,reply.level)"
                      class="tr-form" v-if="replyFormId == reply.id">
                    <div class="row">
                        <div class="col-10">
                            <div class="form-group">
                                                                <textarea class="form-control reply_box"
                                                                          required="required" rows="2"
                                                                          :placeholder="lang.write_reply"
                                                                          v-model="replyForm.comment"></textarea>
                            </div>
                        </div>
                        <div class="col-2">
                            <loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
                            <input type="submit" v-else class="btn btn-primary"
                                   :value="lang.post">
                        </div>
                    </div>
                </form>
                <div class="comment-icon">
                    <ul class="global-list">
                        <li v-if="alreadyLiked(reply.comment_likes)"><a href="javaScript:void(0)" @click="unLike(reply.id,comment.id)" :class="{ 'disable_btn' : blog_like_loading }"> <span
                            class="mdi mdi-thumb-up"></span> <span class="replies_text">({{reply.comment_likes.length }})</span></a></li>
                        <li v-else><a href="javaScript:void(0)" @click="likeReply(reply.id,comment.id)" :class="{ 'disable_btn' : blog_like_loading }"> <span
                            class="mdi mdi-thumb-up-outline"></span> <span
                            class="replies_text">({{ reply.comment_likes.length }})</span></a></li>

                        <li><a href="javaScript:void(0)"
                               @click="$store.dispatch('replyForm',reply.id)"><span
                            class="mdi mdi-share"></span></a>
                        </li>
                    </ul>
                </div>
                <nested_reply :reply="reply" :comment="comment"></nested_reply>
            </div>
        </li>
    </ul>
</template>

<script>
import nested_reply from "./nested_reply";
export default {
    name: "blog_reply",
    components : {
        nested_reply
    },
    props : ['comment','blogDetails','page'],
    computed:{
        replyFormId()
        {
            return this.$store.getters.getReplyForm;
        }
    },
    data()
    {
        return{
            loading : false,
            replyForm: {
                comment: '',
                blog_comment_id: '',
                parent_id: '',
                level: 0,
                slug: this.$route.params.slug,
            }
        }
    },

    methods : {
        commentReply(id, parent_id, level) {
            this.loading = true;
            this.replyForm.blog_comment_id = id;
            if (parent_id) {
                this.replyForm.parent_id = parent_id;
            }
            if (level || level == 0) {
                this.replyForm.level = level + 1;
            }
            let url = this.getUrl('store/blog-comment-reply');
            axios.post(url, this.replyForm).then((response) => {
                this.loading = false;
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                } else {
                    this.replyForm.comment = '';
                    this.$store.dispatch('blogDetails', this.$route.params.slug);
                    this.$store.dispatch('replyForm', '');
                    if (response.data.success) {
                        toastr.success(response.data.success, this.lang.Success +' !!');
                    }
                }
            }).catch((error) => {
                this.loading = false;
            });
        },
    }
}
</script>
