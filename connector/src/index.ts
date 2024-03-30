import { TokenboundConnector } from "./connector";
import { useTokenBoundModal } from "./modal/hooks";
import TokenBoundModal from "./modal/TokenBoundModal";

import { Connector } from "./connector/types/connector";
import { ModalWallet, ModalResult, IModal } from "./connector/types/modal";
import { StarknetWindowObject } from "get-starknet-core";

export {
    TokenBoundModal,
    useTokenBoundModal,
    TokenboundConnector
}

export type {
    ModalWallet,
    ModalResult,
    IModal,
    Connector,
    StarknetWindowObject
}