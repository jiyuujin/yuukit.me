import React, { FC } from 'react'
import * as SC from './index.module.scss'
import {
    product as profileProduct,
    usedSkills as profileUsedSkills,
} from '../../utils/profile'
import {
    product as blogProduct,
    productLinks as blogProductLinks,
    usedSkills as blogUsedSkills,
} from '../../utils/blog'

export const ProductList: FC = () => {
    return (
        <div className={SC.basic}>
            プロダクト一覧
            <div className={SC.subtitle}>
                Web Developer - Yuma Kitamura
            </div>
            <div
                className={SC.description}
                dangerouslySetInnerHTML={{ __html: profileProduct }}
            />
            <div className={SC.subtitle}>利用技術</div>
            <div className={SC.description}>
                <ul>
                    {profileUsedSkills.map((skill) => {
                        return <li key={skill}>{skill}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export const ProductDescription: FC = () => {
    return (
        <div className={SC.basic}>
            <div className={SC.subtitle}>Web猫ブログ</div>
            <div
                className={SC.description}
                dangerouslySetInnerHTML={{ __html: blogProduct }}
            />
            <div className={SC.subtitle}>関連リンク</div>
            <div className={SC.description}>
                <ul>
                    {blogProductLinks.map(
                        (
                            link:
                                | {
                                value: number
                                text: string
                                url: string
                            }
                                | any
                        ) => {
                            return (
                                <li key={link.value}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
            <div className={SC.subtitle}>利用技術</div>
            <div className={SC.description}>
                <ul>
                    {blogUsedSkills.map((skill) => {
                        return <li key={skill}>{skill}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
