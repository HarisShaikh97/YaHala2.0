import React, { useState } from "react"
import {
    View,
    ScrollView,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Platform,
    StyleSheet
} from "react-native"
import LinearGradient from "react-native-linear-gradient"
import GuestUserPopup from "../../components/guest-user-popup/GuestUserPopup"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function Home() {
    const [showPopup, setShowPopup] = useState(true)

    return (
        <View style={styles.wrapper}>
            <GuestUserPopup showPopup={showPopup} setShowPopup={setShowPopup} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/advertisement.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Advertisement
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <Image
                        source={require("../../assets/images/advertisement-banner.png")}
                        style={styles.advertisementBanner}
                        resizeMode="stretch"
                    />
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/feeds.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>Latest Feeds</Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <View style={styles.postCardContainer}>
                        <View style={styles.postCardHeaderWrapper}>
                            <View style={styles.postCardUserDetailsWrapper}>
                                <Image
                                    source={require("../../assets/images/user.png")}
                                    style={styles.userProfileImage}
                                    resizeMode="cover"
                                />
                                <View
                                    style={styles.postCardUserDetailsContainer}
                                >
                                    <View
                                        style={
                                            styles.postCardUserTextHorizontalWrapper
                                        }
                                    >
                                        <View
                                            style={styles.circularSeparator}
                                        />
                                        <Text
                                            style={styles.postCardUserNameText}
                                        >
                                            Karim Saif
                                        </Text>
                                        <View
                                            style={styles.circularSeparator}
                                        />
                                    </View>
                                    <View
                                        style={
                                            styles.postCardUserTextHorizontalWrapper
                                        }
                                    >
                                        <View
                                            style={styles.circularSeparator}
                                        />
                                        <Text
                                            style={styles.postCardDateTimeText}
                                        >
                                            Date & Time
                                        </Text>
                                        <View
                                            style={styles.circularSeparator}
                                        />
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image
                                    source={require("../../assets/icons/options.png")}
                                    style={styles.optionsIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.postCardCaptionContainer}>
                            <Text style={styles.postCardCaptionText}>
                                Some Text wil be here when the User have
                            </Text>
                        </View>
                        <View style={styles.postCardImageCollageContainer}>
                            <View
                                style={[
                                    styles.postCardImageCollageColumn,
                                    styles.collageFirstColumn
                                ]}
                            >
                                <Image
                                    source={require("../../assets/images/post-image-1.png")}
                                    style={styles.collageImageSmall}
                                    resizeMode="cover"
                                />
                                <Image
                                    source={require("../../assets/images/post-image-2.png")}
                                    style={styles.collageImage}
                                    resizeMode="cover"
                                />
                            </View>
                            <View
                                style={[
                                    styles.postCardImageCollageColumn,
                                    styles.collageSecondColumn
                                ]}
                            >
                                <Image
                                    source={require("../../assets/images/post-image-2.png")}
                                    style={styles.collageImage}
                                    resizeMode="cover"
                                />
                                <Image
                                    source={require("../../assets/images/post-image-1.png")}
                                    style={styles.collageImageSmall}
                                    resizeMode="cover"
                                />
                            </View>
                            <View
                                style={[
                                    styles.postCardImageCollageColumn,
                                    styles.collageThirdColumn
                                ]}
                            >
                                <Image
                                    source={require("../../assets/images/post-image-2.png")}
                                    style={styles.collageImage}
                                    resizeMode="cover"
                                />
                                <Image
                                    source={require("../../assets/images/post-image-2.png")}
                                    style={styles.collageImage}
                                    resizeMode="cover"
                                />
                                <Image
                                    source={require("../../assets/images/post-image-2.png")}
                                    style={styles.collageImage}
                                    resizeMode="cover"
                                />
                                <ImageBackground
                                    source={require("../../assets/images/post-image-2.png")}
                                    style={styles.collageImage}
                                    resizeMode="cover"
                                >
                                    <View style={styles.moreImagesCountOverlay}>
                                        <Text
                                            style={styles.moreImagesCountText}
                                        >
                                            15+
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                        <View style={styles.postEngagementWrapper}>
                            <View style={styles.postEngagementItemWrapper}>
                                <View style={styles.postReactionsContainer}>
                                    <Image
                                        source={require("../../assets/icons/reaction-1.png")}
                                        style={styles.postReactionIcon}
                                        resizeMode="contain"
                                    />
                                    <Image
                                        source={require("../../assets/icons/reaction-2.png")}
                                        style={styles.postReactionIcon}
                                        resizeMode="contain"
                                    />
                                    <Image
                                        source={require("../../assets/icons/reaction-3.png")}
                                        style={styles.postReactionIcon}
                                        resizeMode="contain"
                                    />
                                </View>
                                <Text style={styles.postReactionCountText}>
                                    123
                                </Text>
                            </View>
                            <View style={styles.postEngagementItemWrapper}>
                                <View style={styles.postEngagementItemTab}>
                                    <Image
                                        source={require("../../assets/icons/views-small.png")}
                                        style={styles.postEngagementIcon}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={styles.postEngagementCountText}
                                    >
                                        123
                                    </Text>
                                </View>
                                <View style={styles.postEngagementItemTab}>
                                    <Image
                                        source={require("../../assets/icons/comments-small.png")}
                                        style={styles.postEngagementIcon}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={styles.postEngagementCountText}
                                    >
                                        123
                                    </Text>
                                </View>
                                <View style={styles.postEngagementItemTab}>
                                    <Image
                                        source={require("../../assets/icons/shares-small.png")}
                                        style={styles.postEngagementIcon}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={styles.postEngagementCountText}
                                    >
                                        123
                                    </Text>
                                </View>
                                <View style={styles.postEngagementItemTab}>
                                    <Image
                                        source={require("../../assets/icons/voice-small.png")}
                                        style={styles.postEngagementIcon}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={styles.postEngagementCountText}
                                    >
                                        123
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.horizontalSeparator} />
                        <View style={styles.postEngagementWrapper}>
                            <TouchableOpacity>
                                <Image
                                    source={require("../../assets/icons/like.png")}
                                    style={styles.postActionIcon}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require("../../assets/icons/comment.png")}
                                    style={styles.postActionIcon}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require("../../assets/icons/share.png")}
                                    style={styles.postActionIcon}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require("../../assets/icons/voice.png")}
                                    style={styles.postActionIcon}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/advertisement.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Advertisement
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <Image
                        source={require("../../assets/images/advertisement-banner.png")}
                        style={styles.advertisementBanner}
                        resizeMode="stretch"
                    />
                    <View style={styles.sectionHeaderWrapper}>
                        <View style={styles.sectionHeaderContainer}>
                            <View style={styles.circularSeparator} />
                            <Image
                                source={require("../../assets/icons/artist.png")}
                                style={styles.headerIcon}
                                resizeMode="contain"
                            />
                            <View style={styles.circularSeparator} />
                            <Text style={styles.headerTitleText}>
                                Latest Artist
                            </Text>
                            <View style={styles.circularSeparator} />
                        </View>
                        <TouchableOpacity style={styles.seeAllButtonContainer}>
                            <Text style={styles.seeAllButtonText}>See All</Text>
                            <Image
                                source={require("../../assets/icons/next.png")}
                                style={styles.seeAllButtonIcon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionHorizontalWrapper}>
                        <TouchableOpacity style={styles.artistItemContainer}>
                            <Image
                                source={require("../../assets/images/post-image-1.png")}
                                style={styles.artistProfileImage}
                                resizeMode="cover"
                            />
                            <Text style={styles.artistNameText}>
                                Artist Name
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.artistItemContainer}>
                            <Image
                                source={require("../../assets/images/post-image-3.png")}
                                style={styles.artistProfileImage}
                                resizeMode="cover"
                            />
                            <Text style={styles.artistNameText}>
                                Artist Name
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.artistItemContainer}>
                            <Image
                                source={require("../../assets/images/post-image-4.png")}
                                style={styles.artistProfileImage}
                                resizeMode="cover"
                            />
                            <Text style={styles.artistNameText}>
                                Artist Name
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.artistItemContainer}>
                            <Image
                                source={require("../../assets/images/post-image-5.png")}
                                style={styles.artistProfileImage}
                                resizeMode="cover"
                            />
                            <Text style={styles.artistNameText}>
                                Artist Name
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/advertisement.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Advertisement
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <Image
                        source={require("../../assets/images/advertisement-banner.png")}
                        style={styles.advertisementBanner}
                        resizeMode="stretch"
                    />
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/albums.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>New Albums</Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <View style={styles.sectionHorizontalWrapper}>
                        <View style={styles.albumWrapper}>
                            <TouchableOpacity style={styles.albumCard}>
                                <ImageBackground
                                    source={require("../../assets/images/post-image-1.png")}
                                    style={styles.cardCoverImage}
                                    resizeMode="cover"
                                >
                                    <LinearGradient
                                        colors={["transparent", "black"]}
                                        style={styles.albumCardLinearGradient}
                                    >
                                        <View
                                            style={
                                                styles.circularSeparatorWhite
                                            }
                                        />
                                        <Image
                                            source={require("../../assets/icons/music.png")}
                                            style={styles.musicIcon}
                                            resizeMode="contain"
                                        />
                                        <View
                                            style={
                                                styles.circularSeparatorWhite
                                            }
                                        />
                                        <Text style={styles.musicText}>25</Text>
                                        <View
                                            style={
                                                styles.circularSeparatorWhite
                                            }
                                        />
                                    </LinearGradient>
                                </ImageBackground>
                            </TouchableOpacity>
                            <Text style={styles.albumTitleText}>
                                Album Title
                            </Text>
                        </View>
                        <View style={styles.albumWrapper}>
                            <TouchableOpacity style={styles.albumCard}>
                                <ImageBackground
                                    source={require("../../assets/images/post-image-3.png")}
                                    style={styles.cardCoverImage}
                                    resizeMode="cover"
                                >
                                    <LinearGradient
                                        colors={["transparent", "black"]}
                                        style={styles.albumCardLinearGradient}
                                    >
                                        <View
                                            style={
                                                styles.circularSeparatorWhite
                                            }
                                        />
                                        <Image
                                            source={require("../../assets/icons/music.png")}
                                            style={styles.musicIcon}
                                            resizeMode="contain"
                                        />
                                        <View
                                            style={
                                                styles.circularSeparatorWhite
                                            }
                                        />
                                        <Text style={styles.musicText}>25</Text>
                                        <View
                                            style={
                                                styles.circularSeparatorWhite
                                            }
                                        />
                                    </LinearGradient>
                                </ImageBackground>
                            </TouchableOpacity>
                            <Text style={styles.albumTitleText}>
                                Album Title
                            </Text>
                        </View>
                        <View style={styles.albumWrapper}>
                            <TouchableOpacity style={styles.albumCard}>
                                <ImageBackground
                                    source={require("../../assets/images/post-image-4.png")}
                                    style={styles.cardCoverImage}
                                    resizeMode="cover"
                                >
                                    <LinearGradient
                                        colors={["transparent", "black"]}
                                        style={styles.albumCardLinearGradient}
                                    >
                                        <View
                                            style={
                                                styles.circularSeparatorWhite
                                            }
                                        />
                                        <Image
                                            source={require("../../assets/icons/music.png")}
                                            style={styles.musicIcon}
                                            resizeMode="contain"
                                        />
                                        <View
                                            style={
                                                styles.circularSeparatorWhite
                                            }
                                        />
                                        <Text style={styles.musicText}>25</Text>
                                        <View
                                            style={
                                                styles.circularSeparatorWhite
                                            }
                                        />
                                    </LinearGradient>
                                </ImageBackground>
                            </TouchableOpacity>
                            <Text style={styles.albumTitleText}>
                                Album Title
                            </Text>
                        </View>
                    </View>
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/advertisement.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Advertisement
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <Image
                        source={require("../../assets/images/advertisement-banner.png")}
                        style={styles.advertisementBanner}
                        resizeMode="stretch"
                    />
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/stories.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Latest Stories
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <View style={styles.sectionHorizontalWrapper}>
                        <TouchableOpacity style={styles.storyCard}>
                            <ImageBackground
                                source={require("../../assets/images/story-1.png")}
                                style={styles.cardCoverImage}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={["transparent", "black"]}
                                    style={styles.storyCardLinearGradient}
                                >
                                    <Image
                                        source={require("../../assets/images/user-2.png")}
                                        style={styles.storyUserImage}
                                        resizeMode="cover"
                                    />
                                    <View
                                        style={styles.storyUserDetailsWrapper}
                                    >
                                        <Text style={styles.storyUsernameText}>
                                            Username
                                        </Text>
                                        <Text style={styles.storyDateTimeText}>
                                            Time & Date
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.storyCard}>
                            <ImageBackground
                                source={require("../../assets/images/story-2.png")}
                                style={styles.cardCoverImage}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={["transparent", "black"]}
                                    style={styles.storyCardLinearGradient}
                                >
                                    <Image
                                        source={require("../../assets/images/user-2.png")}
                                        style={styles.storyUserImage}
                                        resizeMode="cover"
                                    />
                                    <View
                                        style={styles.storyUserDetailsWrapper}
                                    >
                                        <Text style={styles.storyUsernameText}>
                                            Username
                                        </Text>
                                        <Text style={styles.storyDateTimeText}>
                                            Time & Date
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.storyCard}>
                            <ImageBackground
                                source={require("../../assets/images/story-3.png")}
                                style={styles.cardCoverImage}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={["transparent", "black"]}
                                    style={styles.storyCardLinearGradient}
                                >
                                    <Image
                                        source={require("../../assets/images/user-2.png")}
                                        style={styles.storyUserImage}
                                        resizeMode="cover"
                                    />
                                    <View
                                        style={styles.storyUserDetailsWrapper}
                                    >
                                        <Text style={styles.storyUsernameText}>
                                            Username
                                        </Text>
                                        <Text style={styles.storyDateTimeText}>
                                            Time & Date
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/advertisement.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Advertisement
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <Image
                        source={require("../../assets/images/advertisement-banner.png")}
                        style={styles.advertisementBanner}
                        resizeMode="stretch"
                    />
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/wishes.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Wishes & Thanks
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <View style={styles.sectionHorizontalWrapper}>
                        <TouchableOpacity style={styles.wishCard}>
                            <ImageBackground
                                source={require("../../assets/images/wish-card.png")}
                                style={styles.cardCoverImage}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={["transparent", "black"]}
                                    style={styles.storyCardLinearGradient}
                                >
                                    <Image
                                        source={require("../../assets/images/user-2.png")}
                                        style={styles.storyUserImage}
                                        resizeMode="cover"
                                    />
                                    <View
                                        style={styles.storyUserDetailsWrapper}
                                    >
                                        <Text style={styles.storyUsernameText}>
                                            Username
                                        </Text>
                                        <Text style={styles.storyDateTimeText}>
                                            Time & Date
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wishCard}>
                            <ImageBackground
                                source={require("../../assets/images/wish-card.png")}
                                style={styles.cardCoverImage}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={["transparent", "black"]}
                                    style={styles.storyCardLinearGradient}
                                >
                                    <Image
                                        source={require("../../assets/images/user-2.png")}
                                        style={styles.storyUserImage}
                                        resizeMode="cover"
                                    />
                                    <View
                                        style={styles.storyUserDetailsWrapper}
                                    >
                                        <Text style={styles.storyUsernameText}>
                                            Username
                                        </Text>
                                        <Text style={styles.storyDateTimeText}>
                                            Time & Date
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/advertisement.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Advertisement
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <Image
                        source={require("../../assets/images/advertisement-banner.png")}
                        style={styles.advertisementBanner}
                        resizeMode="stretch"
                    />
                    <View style={styles.sectionHeaderWrapper}>
                        <View style={styles.sectionHeaderContainer}>
                            <View style={styles.circularSeparator} />
                            <Image
                                source={require("../../assets/icons/reels.png")}
                                style={styles.headerIcon}
                                resizeMode="contain"
                            />
                            <View style={styles.circularSeparator} />
                            <Text style={styles.headerTitleText}>
                                Latest Reels
                            </Text>
                            <View style={styles.circularSeparator} />
                        </View>
                        <TouchableOpacity style={styles.seeAllButtonContainer}>
                            <Text style={styles.seeAllButtonText}>See All</Text>
                            <Image
                                source={require("../../assets/icons/next.png")}
                                style={styles.seeAllButtonIcon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionHorizontalWrapper}>
                        <TouchableOpacity style={styles.storyCard}>
                            <ImageBackground
                                source={require("../../assets/images/story-1.png")}
                                style={styles.cardCoverImage}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={["transparent", "black"]}
                                    style={styles.storyCardLinearGradient}
                                >
                                    <Image
                                        source={require("../../assets/images/user-2.png")}
                                        style={styles.storyUserImage}
                                        resizeMode="cover"
                                    />
                                    <View
                                        style={styles.storyUserDetailsWrapper}
                                    >
                                        <Text style={styles.storyUsernameText}>
                                            Username
                                        </Text>
                                        <Text style={styles.storyDateTimeText}>
                                            Time & Date
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.storyCard}>
                            <ImageBackground
                                source={require("../../assets/images/story-2.png")}
                                style={styles.cardCoverImage}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={["transparent", "black"]}
                                    style={styles.storyCardLinearGradient}
                                >
                                    <Image
                                        source={require("../../assets/images/user-2.png")}
                                        style={styles.storyUserImage}
                                        resizeMode="cover"
                                    />
                                    <View
                                        style={styles.storyUserDetailsWrapper}
                                    >
                                        <Text style={styles.storyUsernameText}>
                                            Username
                                        </Text>
                                        <Text style={styles.storyDateTimeText}>
                                            Time & Date
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.storyCard}>
                            <ImageBackground
                                source={require("../../assets/images/story-3.png")}
                                style={styles.cardCoverImage}
                                resizeMode="cover"
                            >
                                <LinearGradient
                                    colors={["transparent", "black"]}
                                    style={styles.storyCardLinearGradient}
                                >
                                    <Image
                                        source={require("../../assets/images/user-2.png")}
                                        style={styles.storyUserImage}
                                        resizeMode="cover"
                                    />
                                    <View
                                        style={styles.storyUserDetailsWrapper}
                                    >
                                        <Text style={styles.storyUsernameText}>
                                            Username
                                        </Text>
                                        <Text style={styles.storyDateTimeText}>
                                            Time & Date
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/advertisement.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Advertisement
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <Image
                        source={require("../../assets/images/advertisement-banner.png")}
                        style={styles.advertisementBanner}
                        resizeMode="stretch"
                    />
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/e-commerce.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>E-Commerce</Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <View style={styles.featureCard}>
                        <Image
                            source={require("../../assets/images/feature-1.png")}
                            style={styles.featureImage}
                            resizeMode="contain"
                        />
                        <View style={styles.featureDetailsWrapper}>
                            <View style={styles.featureDetailsContainer}>
                                <Text style={styles.featureTextLarge}>
                                    Online Shops
                                </Text>
                                <Text style={styles.featureTextSmall}>
                                    Will be Soon Available
                                </Text>
                            </View>
                            <View style={styles.featureDetailsContainer}>
                                <Image
                                    source={require("../../assets/icons/YaHala-logo.png")}
                                    style={styles.logoImage}
                                    resizeMode="contain"
                                />
                                <Text style={styles.featureTextMedium}>
                                    E-Commerce
                                </Text>
                                <Text style={styles.featureTextSmall}>
                                    YaHala
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/advertisement.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Advertisement
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <Image
                        source={require("../../assets/images/advertisement-banner.png")}
                        style={styles.advertisementBanner}
                        resizeMode="stretch"
                    />
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/services.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>Services</Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <View style={styles.featureCard}>
                        <View style={styles.featureDetailsWrapper}>
                            <View style={styles.featureDetailsContainer}>
                                <Text style={styles.featureTextLarge}>
                                    Services
                                </Text>
                                <Text style={styles.featureTextSmall}>
                                    Will be Soon Available
                                </Text>
                            </View>
                            <View style={styles.featureDetailsContainer}>
                                <Image
                                    source={require("../../assets/icons/YaHala-logo.png")}
                                    style={styles.logoImage}
                                    resizeMode="contain"
                                />
                                <Text style={styles.featureTextMedium}>
                                    Services
                                </Text>
                                <Text style={styles.featureTextSmall}>
                                    YaHala
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={require("../../assets/images/feature-2.png")}
                            style={styles.featureImage}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/advertisement.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Advertisement
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <Image
                        source={require("../../assets/images/advertisement-banner.png")}
                        style={styles.advertisementBanner}
                        resizeMode="stretch"
                    />
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/food-delivery.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Food Delivery
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <View style={styles.featureCard}>
                        <Image
                            source={require("../../assets/images/feature-3.png")}
                            style={styles.featureImage}
                            resizeMode="contain"
                        />
                        <View style={styles.featureDetailsWrapper}>
                            <View style={styles.featureDetailsContainer}>
                                <Text style={styles.featureTextLarge}>
                                    Food Delivery
                                </Text>
                                <Text style={styles.featureTextSmall}>
                                    Will be Soon Available
                                </Text>
                            </View>
                            <View style={styles.featureDetailsContainer}>
                                <Image
                                    source={require("../../assets/icons/YaHala-logo.png")}
                                    style={styles.logoImage}
                                    resizeMode="contain"
                                />
                                <Text style={styles.featureTextMedium}>
                                    Food Delivery
                                </Text>
                                <Text style={styles.featureTextSmall}>
                                    YaHala
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/advertisement.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>
                            Advertisement
                        </Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <Image
                        source={require("../../assets/images/advertisement-banner.png")}
                        style={styles.advertisementBanner}
                        resizeMode="stretch"
                    />
                    <View style={styles.sectionHeaderContainer}>
                        <View style={styles.circularSeparator} />
                        <Image
                            source={require("../../assets/icons/food-delivery.png")}
                            style={styles.headerIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.circularSeparator} />
                        <Text style={styles.headerTitleText}>Restaurants</Text>
                        <View style={styles.circularSeparator} />
                    </View>
                    <View style={styles.featureCard}>
                        <Image
                            source={require("../../assets/images/feature-4.png")}
                            style={styles.featureImage}
                            resizeMode="contain"
                        />
                        <View style={styles.featureDetailsWrapper}>
                            <View style={styles.featureDetailsContainer}>
                                <Text style={styles.featureTextLarge}>
                                    Restaurant
                                </Text>
                                <Text style={styles.featureTextSmall}>
                                    Will be Soon Available
                                </Text>
                            </View>
                            <View style={styles.featureDetailsContainer}>
                                <Image
                                    source={require("../../assets/icons/YaHala-logo.png")}
                                    style={styles.logoImage}
                                    resizeMode="contain"
                                />
                                <Text style={styles.featureTextMedium}>
                                    Restaurant
                                </Text>
                                <Text style={styles.featureTextSmall}>
                                    YaHala
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <FooterNav />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column"
    },
    container: {
        flexDirection: "column",
        gap: 15,
        paddingHorizontal: 15,
        paddingTop: Platform.OS === "android" ? 15 : 50,
        paddingBottom: 25
    },
    sectionHeaderWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    sectionHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    circularSeparator: {
        height: 2.5,
        width: 2.5,
        borderRadius: 1.25,
        backgroundColor: "black",
        opacity: 0.4
    },
    circularSeparatorWhite: {
        height: 2.5,
        width: 2.5,
        borderRadius: 1.25,
        backgroundColor: "white"
    },
    headerIcon: {
        height: 20,
        width: 20
    },
    headerTitleText: {
        fontSize: 17.5,
        fontFamily: "Genos-Regular",
        lineHeight: 20,
        color: "black"
    },
    advertisementBanner: {
        height: 150,
        width: "100%"
    },
    postCardContainer: {
        width: "100%",
        borderRadius: 12.5,
        backgroundColor: "white",
        padding: 7.5,
        flexDirection: "column",
        gap: 10
    },
    postCardHeaderWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    optionsIcon: {
        height: 22.5,
        width: 22.5
    },
    postCardUserDetailsWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    postCardUserDetailsContainer: {
        flexDirection: "column"
    },
    postCardUserTextHorizontalWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    postCardUserNameText: {
        fontSize: 17.5,
        fontFamily: "Genos-Regular",
        lineHeight: 20,
        color: "black"
    },
    postCardDateTimeText: {
        fontSize: 12.5,
        fontFamily: "Genos-Light",
        lineHeight: 15,
        color: "#A8A8A8"
    },
    userProfileImage: {
        height: 30,
        width: 30,
        borderRadius: 15,
        overflow: "hidden"
    },
    postCardCaptionContainer: {
        width: "100%",
        padding: 5,
        borderRadius: 7.5,
        backgroundColor: "#F2F2F2"
    },
    postCardCaptionText: {
        fontSize: 12.5,
        fontFamily: "Genos-Regular",
        color: "black",
        opacity: 0.6
    },
    postCardImageCollageContainer: {
        height: 200,
        width: "100%",
        borderRadius: 7.5,
        flexDirection: "row",
        gap: 2.5,
        overflow: "hidden"
    },
    postCardImageCollageColumn: {
        height: "100%",
        flexDirection: "column",
        gap: 2.5
    },
    collageFirstColumn: {
        width: "40%"
    },
    collageSecondColumn: {
        flex: 1
    },
    collageThirdColumn: {
        width: "20%"
    },
    collageImage: {
        flex: 1,
        width: "100%"
    },
    collageImageSmall: {
        height: "40%",
        width: "100%"
    },
    moreImagesCountOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center"
    },
    moreImagesCountText: {
        fontSize: 20,
        color: "white",
        fontFamily: "Genos-Medium"
    },
    postEngagementWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    postEngagementItemWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    postReactionsContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    postReactionIcon: {
        height: 20,
        width: 20
    },
    postReactionCountText: {
        fontSize: 20,
        fontFamily: "Genos-Light",
        lineHeight: 22.5,
        color: "#1C274C"
    },
    postEngagementItemTab: {
        height: 17.5,
        flexDirection: "row",
        gap: 7.5,
        alignItems: "center",
        paddingHorizontal: 3.5,
        borderRadius: 3.5,
        backgroundColor: "#F2F2F2"
    },
    postEngagementIcon: {
        height: 12.5,
        width: 12.5
    },
    postEngagementCountText: {
        fontSize: 12.5,
        fontFamily: "Genos-Light",
        lineHeight: 15,
        color: "#1C274C"
    },
    horizontalSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#F0F4F4"
    },
    postActionIcon: {
        height: 27.5,
        width: 27.5
    },
    seeAllButtonContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    seeAllButtonText: {
        fontSize: 15,
        fontFamily: "Genos-Regular",
        color: "#747688",
        lineHeight: 17.5
    },
    seeAllButtonIcon: {
        height: 12.5,
        width: 12.5
    },
    sectionHorizontalWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    artistItemContainer: {
        flexDirection: "column",
        alignItems: "center",
        gap: 10
    },
    artistProfileImage: {
        height: 65,
        width: 65,
        borderRadius: 32.5,
        overflow: "hidden"
    },
    artistNameText: {
        fontSize: 12.5,
        fontFamily: "Genos-Regular",
        color: "#1C274C"
    },
    albumWrapper: {
        width: "32%",
        flexDirection: "column",
        gap: 5
    },
    albumCard: {
        height: 115,
        width: "100%",
        borderRadius: 7.5,
        overflow: "hidden"
    },
    cardCoverImage: {
        flex: 1,
        justifyContent: "flex-end"
    },
    albumCardLinearGradient: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 3,
        paddingHorizontal: 7.5,
        paddingBottom: 5,
        paddingTop: 25
    },
    musicIcon: {
        height: 15,
        width: 15
    },
    musicText: {
        fontSize: 15,
        fontFamily: "Genos-Regular",
        color: "white",
        lineHeight: 17.5
    },
    albumTitleText: {
        fontSize: 15,
        fontFamily: "Genos-Light",
        color: "#1C274C"
    },
    storyCard: {
        height: 175,
        width: "32%",
        borderRadius: 7.5,
        overflow: "hidden"
    },
    storyCardLinearGradient: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        paddingHorizontal: 7.5,
        paddingBottom: 5,
        paddingTop: 15
    },
    storyUserImage: {
        height: 18.5,
        width: 18.5,
        borderRadius: 3.5,
        overflow: "hidden"
    },
    storyUserDetailsWrapper: {
        flexDirection: "column"
    },
    storyUsernameText: {
        fontSize: 12.5,
        fontFamily: "Genos-Regular",
        color: "white",
        lineHeight: 15
    },
    storyDateTimeText: {
        fontSize: 10,
        fontFamily: "Genos-Regular",
        color: "white",
        lineHeight: 12.5
    },
    wishCard: {
        height: 250,
        width: "49%",
        borderRadius: 7.5,
        overflow: "hidden"
    },
    featureCard: {
        height: 165,
        width: "100%",
        borderRadius: 7.5,
        backgroundColor: "white",
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    featureImage: {
        height: "100%",
        width: "45%"
    },
    featureDetailsWrapper: {
        height: "100%",
        width: "45%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 10
    },
    featureDetailsContainer: {
        flexDirection: "column",
        alignItems: "center"
    },
    featureTextLarge: {
        fontSize: 22.5,
        fontFamily: "Genos-Medium",
        color: "#1C274C",
        lineHeight: 22.5
    },
    featureTextMedium: {
        fontSize: 17.5,
        fontFamily: "Genos-Medium",
        color: "#1C274C",
        lineHeight: 17.5
    },
    featureTextSmall: {
        fontSize: 15,
        fontFamily: "Genos-Light",
        color: "#1C274C",
        opacity: 0.75,
        lineHeight: 15
    },
    logoImage: {
        height: 40,
        width: 40
    }
})
