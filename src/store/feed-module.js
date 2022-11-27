/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";

export default {
    actions: {

        async getNewFeed({ commit }, params) {
            return await $api.get("user/feed", params)
                .then(({ data }) => {
                    return data
                })
        },
        async getFriendFeed({ commit }, params) {
            return await $api.get("user/feed/friends", params)
                .then(({ data }) => {
                    return data
                })
        },
        async getPopularityFeed({ commit }, params) {
            return await $api.get("user/feed/popularity", params)
                .then(({ data }) => {
                    return data
                })
        },
        async getFavoriteFeed({ commit }, params) {
            return await $api.get("user/feed/favorite", params)
                .then(({ data }) => {
                    return data
                })
        },
    }
}