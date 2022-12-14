import { Downloader } from '.';
import { Constructor, PostMetaFromWebApi, Result, UserMetaFromWebApi, UserStories, UserReelsFeed } from '../types';
export declare class InstaTouch {
    private url;
    private download;
    private filepath;
    private filetype;
    private fileName;
    private storeHistory;
    private input;
    private toCollect;
    private storeValue;
    private mediaType;
    private scrapeType;
    private asyncDownload;
    private cli;
    private proxy;
    private session;
    private json2csvParser;
    private collector;
    private spinner;
    private userAgent;
    Downloader: Downloader;
    private hasNextPage;
    private endCursor;
    private id;
    private timeout;
    private historyPath;
    private bulk;
    private zip;
    private itemCount;
    private csrfToken;
    private auth_error;
    private headers;
    constructor({ url, download, filepath, filename, filetype, input, count, proxy, session, mediaType, scrapeType, asyncDownload, userAgent, progress, store_history, timeout, cli, endCursor, bulk, historyPath, zip, headers, user_id, }: Constructor);
    private get getProxy();
    private get getSession();
    private request;
    private returnInitError;
    private get folderDestination();
    startScraper(): Promise<Result | any>;
    private get fileDestination();
    private saveCollectorData;
    private mainLoop;
    private graphQlRequest;
    private get grapQlQuery();
    private extractDataHelper;
    private extractData;
    private extractJson;
    getUserReels(target_user_id: string, page_size: number, max_id: string): Promise<UserReelsFeed>;
    getPostMeta(uri: string): Promise<PostMetaFromWebApi>;
    getStories(id: string): Promise<UserStories>;
    getUserMeta(uri: string): Promise<UserMetaFromWebApi>;
    private collectPosts;
    private cbCollector;
    private storeDownlodProgress;
}
